export interface MaterialsCategory {
  title: any;
  materials: Material[];
}

interface Material {
  mainImage: { imageUrl: string };
  tags: { title: string }[];
  title: any;
}
