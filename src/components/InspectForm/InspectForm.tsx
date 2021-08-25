import * as React from "react";
import { useForm } from "react-hook-form";
import { useValidationStore } from "../../store/teste";

type FormInput = {
  inspectWord: string;
};

export default function InspectForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInput>();
  const { createWord, validateWord } = useValidationStore();

  const onSubmit = (data: FormInput) => {
    console.log(data);
    reset();
    createWord(data.inspectWord);
    setTimeout(() => validateWord(data.inspectWord), 3000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="inspectWord">Palavra de inspecao</label>
      <input
        id="inspectWord"
        type="text"
        placeholder="word here..."
        {...register("inspectWord", { required: true })}
      />
      {errors?.inspectWord?.type === "required" ? (
        <span role="alert">Campo Obrigatório*</span>
      ) : null}
      <input type="submit" />
    </form>
  );
}
