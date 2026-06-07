import type { ImgHTMLAttributes } from "react";

type ImageMeta = {
  slug: string;
  width: number;
  height: number;
  widths: readonly number[];
};

const IMAGE_META: Record<string, ImageMeta> = {
  "/chairman.png": { slug: "chairman", width: 871, height: 1216, widths: [480, 720, 871] },
  "/chairman.PNG": { slug: "chairman", width: 871, height: 1216, widths: [480, 720, 871] },
  "/CEO 1.png": { slug: "ceo-1", width: 768, height: 1393, widths: [480, 720, 768] },
  "/logo.PNG": { slug: "logo", width: 1925, height: 817, widths: [160, 240, 320, 480] },
  "/o1.PNG": { slug: "o1", width: 1309, height: 847, widths: [480, 720, 960] },
  "/o2.PNG": { slug: "o2", width: 688, height: 556, widths: [480, 688] },
  "/o3.PNG": { slug: "o3", width: 1135, height: 782, widths: [480, 720, 960] },
  "/o4.PNG": { slug: "o4", width: 1124, height: 828, widths: [480, 720, 960] },
  "/o5.PNG": { slug: "o5", width: 1114, height: 745, widths: [480, 720, 960] },
  "/o6.PNG": { slug: "o6", width: 1103, height: 750, widths: [480, 720, 960] },
  "/o7.PNG": { slug: "o7", width: 1118, height: 773, widths: [480, 720, 960] },
  "/o8.PNG": { slug: "o8", width: 1115, height: 718, widths: [480, 720, 960] },
  "/o9.PNG": { slug: "o9", width: 1108, height: 786, widths: [480, 720, 960] },
  "/o10.PNG": { slug: "o10", width: 1115, height: 746, widths: [480, 720, 960] },
  "/o11.PNG": { slug: "o11", width: 1143, height: 785, widths: [480, 720, 960] },
  "/o12.PNG": { slug: "o12", width: 1129, height: 775, widths: [480, 720, 960] },
  "/o13.PNG": { slug: "o13", width: 1104, height: 793, widths: [480, 720, 960] },
  "/o14.PNG": { slug: "o14", width: 1098, height: 755, widths: [480, 720, 960] },
  "/o15.PNG": { slug: "o15", width: 1114, height: 786, widths: [480, 720, 960] },
  "/o16.PNG": { slug: "o16", width: 1124, height: 737, widths: [480, 720, 960] },
  "/o17.PNG": { slug: "o17", width: 1111, height: 753, widths: [480, 720, 960] },
  "/o18.PNG": { slug: "o18", width: 1117, height: 807, widths: [480, 720, 960] },
  "/o19.PNG": { slug: "o19", width: 1110, height: 779, widths: [480, 720, 960] },
  "/o20.PNG": { slug: "o20", width: 1122, height: 794, widths: [480, 720, 960] },
  "/o21.PNG": { slug: "o21", width: 1112, height: 773, widths: [480, 720, 960] },
  "/o22.PNG": { slug: "o22", width: 1124, height: 797, widths: [480, 720, 960] },
  "/o23.PNG": { slug: "o23", width: 1129, height: 799, widths: [480, 720, 960] },
};

type OptimizedImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet"> & {
  src: string;
  sizes: string;
};

function buildSrcSet(meta: ImageMeta, ext: "avif" | "webp") {
  return meta.widths.map((width) => `/optimized/${meta.slug}-${width}.${ext} ${width}w`).join(", ");
}

export function OptimizedImage({
  src,
  alt,
  sizes,
  loading = "lazy",
  decoding = "async",
  ...props
}: OptimizedImageProps) {
  const meta = IMAGE_META[src];

  if (!meta) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} loading={loading} decoding={decoding} {...props} />;
  }

  return (
    <picture>
      <source type="image/avif" srcSet={buildSrcSet(meta, "avif")} sizes={sizes} />
      <source type="image/webp" srcSet={buildSrcSet(meta, "webp")} sizes={sizes} />
      <img
        src={`/optimized/${meta.slug}-${meta.widths[meta.widths.length - 1]}.webp`}
        alt={alt}
        width={meta.width}
        height={meta.height}
        loading={loading}
        decoding={decoding}
        {...props}
      />
    </picture>
  );
}
