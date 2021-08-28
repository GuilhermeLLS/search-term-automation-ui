import * as React from "react";
import { useForm } from "react-hook-form";
import { useWords } from "../../hooks/useWords/useWords";

type FormInput = {
  inspectWord: string;
};

const requestValidationId = async (word: string): Promise<{ id: string }> => {
  const res = await fetch(process.env.REACT_APP_CRAWL_API_ENDPOINT_DEV as string, {
    method: "POST",
    body: JSON.stringify({ keyword: word }),
  });
  return res.json();
};

export default function InspectForm() {
  const {
    reset,
    setError,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInput>();
  const { createWord } = useWords();

  const onSubmit = async (data: FormInput) => {
    const { id } = await requestValidationId(data.inspectWord);
    try {
      createWord({ id, value: data.inspectWord });
      reset();
    } catch (error) {
      setError("inspectWord", { message: error, type: "value" });
    }
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
      {errors?.inspectWord?.type === "value" ? (
        <span role="alert">Palavra já existe na lista!</span>
      ) : null}
      <input type="submit" value={isSubmitting ? "Carregando" : "Enviar"} />
    </form>
  );
}
