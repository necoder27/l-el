import type {Ref} from "vue";

type ChangePageFunction = (newPage: string) => void;

export interface PageContext {
  selectedPage: Ref<string>;
  changePage: ChangePageFunction;
}
