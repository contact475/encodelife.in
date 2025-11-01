/**
 * Strapi API Helper
 * 
 * This file provides functions to fetch data from Strapi CMS
 * Replace hardcoded content with dynamic Strapi content
 */

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

interface FetchOptions extends RequestInit {
  headers?: HeadersInit;
}

/**
 * Generic fetch function for Strapi API
 */
export async function fetchAPI(endpoint: string, options: FetchOptions = {}) {
  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
  };

  // Add authorization token if available (for server-side requests)
  if (STRAPI_API_TOKEN) {
    defaultHeaders['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`;
  }

  const mergedOptions: FetchOptions = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  const url = `${STRAPI_URL}/api${endpoint}`;
  
  try {
    const response = await fetch(url, mergedOptions);

    if (!response.ok) {
      throw new Error(`Strapi API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Strapi API fetch error:', error);
    throw error;
  }
}

// ============================================
// BLOGS
// ============================================

export interface StrapiBlog {
  id: number;
  attributes: {
    title: string;
    slug: string;
    content: string;
    description?: string;
    author?: string;
    thumbnail?: {
      data?: {
        attributes: {
          url: string;
          alternativeText?: string;
        };
      };
    };
    tags?: string[];
    published_at?: string;
    status: 'draft' | 'published' | 'archived';
    views: number;
    createdAt: string;
    updatedAt: string;
  };
}

/**
 * Get all published blogs
 */
export async function getBlogs(): Promise<StrapiBlog[]> {
  const data = await fetchAPI('/blogs?populate=*&filters[status][$eq]=published&sort=published_at:desc');
  return data.data;
}

/**
 * Get single blog by slug
 */
export async function getBlogBySlug(slug: string): Promise<StrapiBlog | null> {
  const data = await fetchAPI(`/blogs?filters[slug][$eq]=${slug}&populate=*`);
  return data.data[0] || null;
}

/**
 * Get recent blogs (limit)
 */
export async function getRecentBlogs(limit: number = 3): Promise<StrapiBlog[]> {
  const data = await fetchAPI(`/blogs?populate=*&filters[status][$eq]=published&sort=published_at:desc&pagination[limit]=${limit}`);
  return data.data;
}

// ============================================
// AWARDS
// ============================================

export interface StrapiAward {
  id: number;
  attributes: {
    title: string;
    description: string;
    image?: {
      data?: {
        attributes: {
          url: string;
          alternativeText?: string;
        };
      };
    };
    awarded_by?: string;
    awarded_date?: string;
    display_order?: number;
    createdAt: string;
    updatedAt: string;
  };
}

/**
 * Get all awards
 */
export async function getAwards(): Promise<StrapiAward[]> {
  const data = await fetchAPI('/awards?populate=*&sort=display_order:asc');
  return data.data;
}

// ============================================
// PRESS RELEASES
// ============================================

export interface StrapiPressRelease {
  id: number;
  attributes: {
    title: string;
    content: string;
    pdf_file?: {
      data?: {
        attributes: {
          url: string;
          name: string;
        };
      };
    };
    published_date?: string;
    status: 'draft' | 'published';
    createdAt: string;
    updatedAt: string;
  };
}

/**
 * Get all published press releases
 */
export async function getPressReleases(): Promise<StrapiPressRelease[]> {
  const data = await fetchAPI('/press-releases?populate=*&filters[status][$eq]=published&sort=published_date:desc');
  return data.data;
}

// ============================================
// EVENTS
// ============================================

export interface StrapiEvent {
  id: number;
  attributes: {
    name: string;
    description: string;
    event_date: string;
    location?: string;
    registration_link?: string;
    image?: {
      data?: {
        attributes: {
          url: string;
          alternativeText?: string;
        };
      };
    };
    status: 'upcoming' | 'ongoing' | 'completed';
    createdAt: string;
    updatedAt: string;
  };
}

/**
 * Get upcoming events
 */
export async function getUpcomingEvents(): Promise<StrapiEvent[]> {
  const data = await fetchAPI('/events?populate=*&filters[status][$eq]=upcoming&sort=event_date:asc');
  return data.data;
}

/**
 * Get all events
 */
export async function getAllEvents(): Promise<StrapiEvent[]> {
  const data = await fetchAPI('/events?populate=*&sort=event_date:desc');
  return data.data;
}

// ============================================
// NEWS ARTICLES
// ============================================

export interface StrapiNewsArticle {
  id: number;
  attributes: {
    title: string;
    source?: string;
    external_link: string;
    thumbnail?: {
      data?: {
        attributes: {
          url: string;
          alternativeText?: string;
        };
      };
    };
    published_date?: string;
    category?: string;
    createdAt: string;
    updatedAt: string;
  };
}

/**
 * Get all news articles
 */
export async function getNewsArticles(): Promise<StrapiNewsArticle[]> {
  const data = await fetchAPI('/news-articles?populate=*&sort=published_date:desc');
  return data.data;
}

// ============================================
// GALLERY IMAGES
// ============================================

export interface StrapiGalleryImage {
  id: number;
  attributes: {
    title?: string;
    image: {
      data: {
        attributes: {
          url: string;
          alternativeText?: string;
        };
      };
    };
    thumbnail?: {
      data?: {
        attributes: {
          url: string;
        };
      };
    };
    category?: string;
    description?: string;
    display_order?: number;
    createdAt: string;
    updatedAt: string;
  };
}

/**
 * Get all gallery images
 */
export async function getGalleryImages(category?: string): Promise<StrapiGalleryImage[]> {
  let endpoint = '/gallery-images?populate=*&sort=display_order:asc';
  if (category) {
    endpoint += `&filters[category][$eq]=${category}`;
  }
  const data = await fetchAPI(endpoint);
  return data.data;
}

// ============================================
// DOWNLOADS
// ============================================

export interface StrapiDownload {
  id: number;
  attributes: {
    title: string;
    description?: string;
    file: {
      data: {
        attributes: {
          url: string;
          name: string;
          size: number;
        };
      };
    };
    category?: string;
    download_count: number;
    file_size?: string;
    createdAt: string;
    updatedAt: string;
  };
}

/**
 * Get all downloads
 */
export async function getDownloads(category?: string): Promise<StrapiDownload[]> {
  let endpoint = '/downloads?populate=*';
  if (category) {
    endpoint += `&filters[category][$eq]=${category}`;
  }
  const data = await fetchAPI(endpoint);
  return data.data;
}

// ============================================
// CAREERS
// ============================================

export interface StrapiCareer {
  id: number;
  attributes: {
    job_title: string;
    description: string;
    location?: string;
    employment_type: 'full-time' | 'part-time' | 'contract';
    deadline?: string;
    status: 'open' | 'closed';
    requirements?: string;
    responsibilities?: string;
    createdAt: string;
    updatedAt: string;
  };
}

/**
 * Get all open job positions
 */
export async function getOpenJobs(): Promise<StrapiCareer[]> {
  const data = await fetchAPI('/careers?filters[status][$eq]=open&sort=createdAt:desc');
  return data.data;
}

/**
 * Get all jobs (including closed)
 */
export async function getAllJobs(): Promise<StrapiCareer[]> {
  const data = await fetchAPI('/careers?sort=createdAt:desc');
  return data.data;
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get full URL for Strapi media
 */
export function getStrapiMedia(url: string | undefined): string {
  if (!url) return '';
  
  // If URL is already absolute, return as is
  if (url.startsWith('http')) {
    return url;
  }
  
  // Otherwise, prepend Strapi URL
  return `${STRAPI_URL}${url}`;
}

/**
 * Format Strapi date
 */
export function formatStrapiDate(dateString: string | undefined): string {
  if (!dateString) return '';
  
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Convert Strapi blog to legacy format (for backward compatibility)
 */
export function convertStrapiBlogToLegacy(strapiBlog: StrapiBlog) {
  return {
    slug: strapiBlog.attributes.slug,
    title: strapiBlog.attributes.title,
    description: strapiBlog.attributes.description || '',
    date: strapiBlog.attributes.published_at || strapiBlog.attributes.createdAt,
    author: strapiBlog.attributes.author,
    thumbnail: strapiBlog.attributes.thumbnail?.data?.attributes.url 
      ? getStrapiMedia(strapiBlog.attributes.thumbnail.data.attributes.url)
      : undefined,
    content: strapiBlog.attributes.content,
    tags: strapiBlog.attributes.tags || [],
  };
}
