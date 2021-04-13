interface Product {
  id: number;
  value: string;
  error: string;
}

export interface Props {
  defaultProducts?: Product[];
  handleSuccess: () => void;
}
