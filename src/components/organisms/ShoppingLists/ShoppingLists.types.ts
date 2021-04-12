interface ShoppingListItem {
  id: string;
  title: string;
}

export interface RenderItemProps {
  item: ShoppingListItem;
}

export interface Props {
  data: ShoppingListItem[];
  handleDelete: (id: string) => void;
}
