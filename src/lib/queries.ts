// GROQ queries for the portfolio site.

export const SETTINGS_Q = `*[_type == "siteSettings"][0]{
  name, role, tagline, bio, location, email, phone,
  github, linkedin, twitter, marquee, stats, values,
  seoTitle, seoDescription,
  "portrait": portrait
}`;

export const PROJECTS_Q = `*[_type == "project"] | order(order asc, _createdAt desc){
  _id, title, "slug": slug.current, tagline, year, role, client,
  liveUrl, repoUrl, tech, highlights, featured, order,
  "cover": cover, "gallery": gallery
}`;

export const FEATURED_PROJECTS_Q = `*[_type == "project" && featured == true] | order(order asc)[0...4]{
  _id, title, "slug": slug.current, tagline, year, role,
  tech, "cover": cover
}`;

export const PROJECT_BY_SLUG_Q = `*[_type == "project" && slug.current == $slug][0]{
  _id, title, "slug": slug.current, tagline, year, role, client,
  liveUrl, repoUrl, tech, highlights, body,
  "cover": cover, "gallery": gallery
}`;

export const EXPERIENCE_Q = `*[_type == "experience"] | order(startDate desc){
  _id, role, company, location, period, bullets, tech
}`;

export const CERTIFICATES_Q = `*[_type == "certificate"] | order(year desc){
  _id, title, issuer, year, url, group
}`;

export const SERVICES_Q = `*[_type == "service"] | order(order asc){
  _id, title, summary, deliverables, startingAt
}`;

export const PROCESS_Q = `*[_type == "processStep"] | order(order asc){
  _id, title, body
}`;
