/**
 * Image URLs from greatlasvegashomes.com
 * These images are hosted on Squarespace CDN and can be used directly
 * or downloaded and stored locally in client/public/images/
 */

export const imageUrls = {
  // Hero & Main Images (format=1200w for LCP/hero to reduce transfer size)
  hero: {
    luxuryHome: "https://images.squarespace-cdn.com/content/v1/5fb449ff821d2b5bd579a0eb/1628790748571-H91ZHOUP6K8M31RFOY0M/luxury+homes.jpg?format=1200w",
    singleFamily: "https://images.squarespace-cdn.com/content/v1/5fb449ff821d2b5bd579a0eb/1628790963337-1XUN5V4BNZC035HGT2JZ/single-family-home.jpg?format=1200w",
  },
  
  // Community Images
  community: {
    neighborhoods: "https://images.squarespace-cdn.com/content/v1/5fb449ff821d2b5bd579a0eb/1628791115734-ZHU9EYZY99RTU6D5PJNZ/las+vegas+neighborhoods.jpg?format=1500w",
    golfCourse: "https://images.squarespace-cdn.com/content/v1/5fb449ff821d2b5bd579a0eb/1628790775156-3SQPRUN01M19CMSIYK2H/golf-course-homes.jpg?format=1500w",
    masterPlanned: "https://images.squarespace-cdn.com/content/v1/5fb449ff821d2b5bd579a0eb/1628791427621-9BBUP137WBH3GZWAWH91/master+planned+communities.jpg?format=1500w",
    lakefront: "https://images.squarespace-cdn.com/content/v1/5fb449ff821d2b5bd579a0eb/1628791466246-3XFTLB4X16WR12SDEZ13/lakefront+homes.jpg?format=1500w",
  },
  
  // Amenities
  amenities: {
    golfCourse: "https://images.squarespace-cdn.com/content/v1/5fb449ff821d2b5bd579a0eb/1628790775156-3SQPRUN01M19CMSIYK2H/golf-course-homes.jpg?format=1500w",
    neighborhoods: "https://images.squarespace-cdn.com/content/v1/5fb449ff821d2b5bd579a0eb/1628791115734-ZHU9EYZY99RTU6D5PJNZ/las+vegas+neighborhoods.jpg?format=1500w",
  },
  
  // Gallery Images
  gallery: {
    highRise: "https://images.squarespace-cdn.com/content/v1/5fb449ff821d2b5bd579a0eb/1628790695915-ZK953DMPBGZ8WGA8MIVW/high+rise+condos.jpg?format=1500w",
    luxury: "https://images.squarespace-cdn.com/content/v1/5fb449ff821d2b5bd579a0eb/1628790748571-H91ZHOUP6K8M31RFOY0M/luxury+homes.jpg?format=1500w",
    singleFamily: "https://images.squarespace-cdn.com/content/v1/5fb449ff821d2b5bd579a0eb/1628790963337-1XUN5V4BNZC035HGT2JZ/single-family-home.jpg?format=1500w",
    condos: "https://images.squarespace-cdn.com/content/v1/5fb449ff821d2b5bd579a0eb/1628791537903-4JHNMA987KHWPYC3F244/las+vegas+condos.jpg?format=1500w",
    midRise: "https://images.squarespace-cdn.com/content/v1/5fb449ff821d2b5bd579a0eb/1628791595293-VCWCGU467W3UADGGI9WF/midrise+condos.jpg?format=1500w",
    condoHotels: "https://images.squarespace-cdn.com/content/v1/5fb449ff821d2b5bd579a0eb/1628791638343-ABHF5C5GCSVPDC7D3C10/condo+hotels.jpg?format=1500w",
    townhomes: "https://images.squarespace-cdn.com/content/v1/5fb449ff821d2b5bd579a0eb/1628791662720-OKVYE1GM5EQNKTD3NVD4/condos+and+town+homes.jpg?format=1500w",
    henderson: "https://images.squarespace-cdn.com/content/v1/5fb449ff821d2b5bd579a0eb/1628791139966-CTAO5S04Y0KYZ41OJBGM/henderson+realestate.jpg?format=1500w",
    northLasVegas: "https://images.squarespace-cdn.com/content/v1/5fb449ff821d2b5bd579a0eb/1628791172796-C5WD2CHST6NEOPJ1MI8L/north+las+vegas.jpg?format=1500w",
    boulderCity: "https://images.squarespace-cdn.com/content/v1/5fb449ff821d2b5bd579a0eb/1628791252484-DTD9SH02Y9P30O0B3CW3/boulder+city.jpg?format=1500w",
  },
  
  // About/Professional (1200w for smaller transfer)
  about: {
    // Note: Professional headshot would need to be added separately
    // Using luxury homes as placeholder for now
    professional: "https://images.squarespace-cdn.com/content/v1/5fb449ff821d2b5bd579a0eb/1628790748571-H91ZHOUP6K8M31RFOY0M/luxury+homes.jpg?format=1200w",
  },
} as const;

