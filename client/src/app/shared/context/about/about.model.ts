export interface AboutData {
    _id: string;
    image: {
      imageUrl: string;
    };
    aboutText: any;
    medias: Media[];
  }
  
  interface Media {
    mediaName: string;
    mediaLink: string;
    contact:string;
    isSocialMedia:boolean;
  }
  