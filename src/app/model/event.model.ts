export interface EventModelServer {
    id: number;
    title: string;
    description: string;
    ticketBal: number;
    price: number;
    dateTime: string;
    location: string;
    image: string;
  }
  
  export interface ServerResponse {
    //count: number;
    events: EventModelServer[];
  }
  