import type { Express } from "express";
import { createServer, type Server } from "http";
import fs from "fs";
import path from "path";
import { storage } from "./storage";
import { insertLeadSchema, insertPropertySchema, insertMarketDataSchema } from "@shared/schema";
import { crmIntegration } from "./crm-integration";

export async function registerRoutes(app: Express): Promise<Server> {
  // SEO Routes - Serve sitemap.xml
  app.get("/sitemap.xml", (req, res) => {
    const sitemapPath = path.resolve(
      import.meta.dirname,
      "..",
      "client",
      "public",
      "sitemap.xml"
    );
    
    // In production, try repo-root public first
    const prodSitemapPath = path.resolve(
      import.meta.dirname,
      "..",
      "public",
      "sitemap.xml"
    );
    
    const filePath = fs.existsSync(prodSitemapPath) ? prodSitemapPath : sitemapPath;
    
    if (fs.existsSync(filePath)) {
      res.set('Content-Type', 'application/xml');
      res.sendFile(filePath);
    } else {
      // Fallback to inline sitemap if file doesn't exist
      res.set('Content-Type', 'application/xml');
      res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.arcadiahomeslasvegas.com/</loc>
    <lastmod>2025-11-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`);
    }
  });

  // SEO Routes - Serve robots.txt
  app.get("/robots.txt", (req, res) => {
    const robotsPath = path.resolve(
      import.meta.dirname,
      "..",
      "client",
      "public",
      "robots.txt"
    );
    
    // In production, try repo-root public first
    const prodRobotsPath = path.resolve(
      import.meta.dirname,
      "..",
      "public",
      "robots.txt"
    );
    
    const filePath = fs.existsSync(prodRobotsPath) ? prodRobotsPath : robotsPath;
    
    if (fs.existsSync(filePath)) {
      res.set('Content-Type', 'text/plain');
      res.sendFile(filePath);
    } else {
      // Fallback to inline robots.txt if file doesn't exist
      res.set('Content-Type', 'text/plain');
      res.send(`User-agent: *
Allow: /
Sitemap: https://www.arcadiahomeslasvegas.com/sitemap.xml`);
    }
  });

  // Chat API (AIChatWidget) - optional OpenRouter AI; fallback stub
  app.post("/api/chat", async (req, res) => {
    try {
      const body = req.body as { prompt?: string; conversation?: { role: string; content: string }[] };
      const prompt = typeof body?.prompt === "string" ? body.prompt.trim() : "";
      const conversation = Array.isArray(body?.conversation) ? body.conversation : [];

      const fallbackReply =
        "Thanks for your message! For the best help with Arcadia Homes Las Vegas, Summerlin West, or scheduling a showing, please call or text Dr. Jan Duffy at (702) 500-0337 or email DrDuffy@arcadiahomeslasvegas.com. She'll get back to you quickly.";

      const apiKey = process.env.OPENROUTER_API_KEY;
      if (apiKey && prompt) {
        const messages: { role: string; content: string }[] = [
          {
            role: "system",
            content:
              "You are a friendly real estate assistant for Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties. You specialize in Arcadia Homes Las Vegas and Summerlin West (89135). Be concise, warm, and professional. Always mention that users can contact Dr. Jan Duffy at (702) 500-0337 or DrDuffy@arcadiahomeslasvegas.com for personalized assistance.",
          },
          ...conversation.filter((m) => m?.role && m?.content),
          { role: "user", content: prompt },
        ];

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
            "HTTP-Referer": "https://www.arcadiahomeslasvegas.com",
          },
          body: JSON.stringify({
            model: "anthropic/claude-3.5-haiku",
            messages,
            temperature: 0.7,
            max_tokens: 500,
          }),
        });

        if (response.ok) {
          const data = (await response.json()) as { choices?: { message?: { content?: string } }[] };
          const reply = data?.choices?.[0]?.message?.content?.trim();
          if (reply) {
            return res.json({ reply });
          }
        }
      }

      res.json({ reply: fallbackReply });
    } catch {
      res.status(500).json({ message: "Chat unavailable. Please call (702) 500-0337." });
    }
  });

  // Properties
  app.get("/api/properties", async (req, res) => {
    try {
      const status = req.query.status as string;
      const properties = status 
        ? await storage.getPropertiesByStatus(status)
        : await storage.getAllProperties();
      res.json(properties);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch properties" });
    }
  });

  app.get("/api/properties/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const property = await storage.getProperty(id);
      if (!property) {
        return res.status(404).json({ message: "Property not found" });
      }
      res.json(property);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch property" });
    }
  });

  app.post("/api/properties", async (req, res) => {
    try {
      const validatedData = insertPropertySchema.parse(req.body);
      const property = await storage.createProperty(validatedData);
      res.status(201).json(property);
    } catch (error) {
      res.status(400).json({ message: "Invalid property data" });
    }
  });

  // Market Data
  app.get("/api/market-data", async (req, res) => {
    try {
      const marketData = await storage.getAllMarketData();
      res.json(marketData);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch market data" });
    }
  });

  app.get("/api/market-data/latest", async (req, res) => {
    try {
      const latest = await storage.getLatestMarketData();
      if (!latest) {
        return res.status(404).json({ message: "No market data available" });
      }
      res.json(latest);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch latest market data" });
    }
  });

  app.post("/api/market-data", async (req, res) => {
    try {
      const validatedData = insertMarketDataSchema.parse(req.body);
      const marketData = await storage.createMarketData(validatedData);
      res.status(201).json(marketData);
    } catch (error) {
      res.status(400).json({ message: "Invalid market data" });
    }
  });

  // Leads
  app.get("/api/leads", async (req, res) => {
    try {
      const leads = await storage.getAllLeads();
      res.json(leads);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch leads" });
    }
  });

  app.post("/api/leads", async (req, res) => {
    try {
      const validatedData = insertLeadSchema.parse(req.body);
      
      const lead = await storage.createLead(validatedData);
      
      const crmResult = await crmIntegration.createLead({
        name: `${validatedData.firstName} ${validatedData.lastName}`,
        email: validatedData.email,
        phone: validatedData.phone,
        source: `Arcadia Homes Las Vegas Website - ${validatedData.source}`,
        message: validatedData.message || undefined,
        tags: ['Website Lead', 'Arcadia Homes Las Vegas Inquiry'],
        customFields: {
          lead_source: validatedData.source,
          interest_type: validatedData.interest,
          capture_date: new Date().toISOString(),
          assigned_agent: 'Dr. Jan Duffy'
        }
      });

      if (crmResult.success) {
        console.log(`Lead ${lead.id} successfully sent to Follow Up Boss CRM with ID: ${crmResult.leadId}`);
      } else {
        console.error(`Failed to send lead ${lead.id} to Follow Up Boss CRM: ${crmResult.error}`);
      }
      
      res.status(201).json({ 
        ...lead, 
        crmSynced: crmResult.success,
        crmLeadId: crmResult.leadId 
      });
    } catch (error) {
      console.error('Error creating lead:', error);
      res.status(400).json({ message: "Invalid lead data", error: String(error) });
    }
  });

  // Amenities
  app.get("/api/amenities", async (req, res) => {
    try {
      const category = req.query.category as string;
      const amenities = category 
        ? await storage.getAmenitiesByCategory(category)
        : await storage.getAllAmenities();
      res.json(amenities);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch amenities" });
    }
  });

  // Schools
  app.get("/api/schools", async (req, res) => {
    try {
      const level = req.query.level as string;
      const schools = level 
        ? await storage.getSchoolsByLevel(level)
        : await storage.getAllSchools();
      res.json(schools);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch schools" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
