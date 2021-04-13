export interface Props {
  title: string;
  id: string;
  handleDelete: () => void;
  handleClick: (listId: string, listTitle: string) => void;
}
