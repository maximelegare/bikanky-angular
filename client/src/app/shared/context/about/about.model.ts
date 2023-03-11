export interface AboutData {
    _id: string;
    image: {
      imageUrl: string;
    };
    aboutText: object;
    contactMedias: Media[];
  }
  
  interface Media {
    mediaName: string;
    mediaLink: string;
    contact:string;
    isSocialMedia:boolean;
  }
  