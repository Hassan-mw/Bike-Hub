import { IconCloud } from "@/components/magicui/icon-cloud";
 
const slugs = [
    "ducati",
    "vespa",
    "suzuki",
    "ktm",
    "husqvarna",
    "honda",
    "bmw",
    "ducati",
    "husqvarna",
    "ktm",
    "honda",
    "suzuki",
    "vespa",
  

  ];
  
const HoverCard = () => {
    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
      );
     
      return (
        <div className="relative flex size-full  items-center justify-center overflow-hidden">
          <IconCloud images={images} />
        </div>
      );
    }

export default HoverCard