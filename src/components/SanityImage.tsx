import { urlFor } from "@/lib/sanity";

interface Props {
  image?: any;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallback?: string;
  loading?: "lazy" | "eager";
}

const SanityImage = ({ image, alt, width = 1600, height, className, fallback, loading = "lazy" }: Props) => {
  if (!image?.asset) {
    if (!fallback) {
      return (
        <div className={`bg-muted ${className ?? ""}`} aria-label={alt} role="img" />
      );
    }
    return <img src={fallback} alt={alt} loading={loading} className={className} />;
  }
  let b = urlFor(image).width(width).auto("format").quality(85);
  if (height) b = b.height(height).fit("crop");
  return <img src={b.url()} alt={alt} loading={loading} className={className} />;
};

export default SanityImage;
