export interface Props {
  handleDelete: () => void;
  displayDelete: boolean;
  error: string;
  value: string;
  setValue: (value: string) => void;
}
