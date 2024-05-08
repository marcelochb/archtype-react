interface IControllerGetDataReturn<T> {
    data: T;
    loading: boolean;
    error: boolean;
  }
  
  export interface IControllerGetData<T> {(): IControllerGetDataReturn<T>}
  
  type IControllerFormDataReturn<T> = IControllerGetDataReturn<T> & {
    onSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void,
    onChange: {
      (e: React.ChangeEvent<any>): void;
      <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1 extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
  },
  }
  
  export interface IControllerFormData<T> { (fn?: Function): IControllerFormDataReturn<T> }