import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => (
  <section id="about" className="max-md:px-2">
    <BentoGrid>
      {gridItems.map(
        ({ id, title, img, description, className, titleClassName, imgClassName, spareImg }) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
            description={description}
            className={className}
          />
        ),
      )}
    </BentoGrid>
  </section>
);

export default Grid;
