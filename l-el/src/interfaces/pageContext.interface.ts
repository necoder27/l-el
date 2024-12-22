import type {Ref} from "vue";

type ChangePageFunction = (newPage: string) => void;

export interface IPageContext {
  selectedPage: Ref<string>;
  changePage: ChangePageFunction;
}
