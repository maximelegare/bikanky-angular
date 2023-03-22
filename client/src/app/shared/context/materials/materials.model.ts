export interface MaterialsCategory {
  title: any;
  materials: Material[];
}

export interface Material {
  mainImage: { imageUrl: string };
  tags: { title: string }[];
  title: any;
  isLimitedQuantity:boolean;
}
