import * as React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useValidationStore } from "../../store/store";

type FormInput = {
  inspectWord: string;
};

const requestValidationId = async (word: string): Promise<{ id: string }> => {
  const res = await fetch("http://testapp.axreng.com:4567/crawl", {
    method: "POST",
    body: JSON.stringify({ keyword: word }),
  });
  console.log(res);
  return res.json();
};

export default function InspectForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInput>();
  const { createWord } = useValidationStore();
  const mutation = useMutation(requestValidationId);

  const onSubmit = async (data: FormInput) => {
    const { id } = await mutation.mutateAsync(data.inspectWord);
    createWord({ id, value: data.inspectWord });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="inspectWord">Palavra de inspecao</label>
      <input
        id="inspectWord"
        type="text"
        placeholder="word here..."
        {...register("inspectWord", { required: true, minLength: 4 })}
      />
      {errors?.inspectWord?.type === "required" ? (
        <span role="alert">Campo Obrigatório*</span>
      ) : null}
      {errors?.inspectWord?.type === "minLength" ? (
        <span role="alert">Tamanho minimo de 4 caracteres*</span>
      ) : null}
      <input type="submit" value={mutation.isLoading ? "Carregando" : "Enviar"} />
    </form>
  );
}
