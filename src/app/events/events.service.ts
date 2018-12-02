export class EventsService {
  list: { id: number; title: string; description: string; }[] = [
    { id: 1, title: 'Event one', description: 'This is event. One of many. There will be more.'},
    { id: 2, title: 'Event one', description: 'This is event. One of many. There will be more.'},
    { id: 3, title: 'Event one', description: 'This is event. One of many. There will be more.'},
    { id: 4, title: 'Event one', description: 'This is event. One of many. There will be more.'},
    { id: 5, title: 'Event one', description: 'This is event. One of many. There will be more.'},
    { id: 6, title: 'Event one', description: 'This is event. One of many. There will be more.'},
    { id: 7, title: 'Event one', description: 'This is event. One of many. There will be more.'},
    { id: 8, title: 'Event one', description: 'This is event. One of many. There will be more.'}
  ];


addItem(item: {title: string, description: string}) {
  const id = this.list.length + 1;
  this.list.push({
    id,
    title: item.title,
    description: item.description,
  });
 }
 deleteItem(item: {title: string, description: string}) {
  const id = this.list.length + 1;
  this.list.push({
    id,
    title: item.title,
    description: item.description,
  });
 }

 
}
