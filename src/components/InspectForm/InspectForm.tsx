import * as React from "react";
import { useForm } from "react-hook-form";
import { useWords } from "../../hooks/useWords/useWords";
import { Form, Group, Input, SubmitInput } from "./styles";

type FormInput = {
  inspectWord: string;
};

const requestValidationId = async (word: string): Promise<{ id: string }> => {
  const res = await fetch(`${process.env.REACT_APP_CRAWL_API_ENDPOINT as string}/crawl`, {
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
      setError("inspectWord", { message: "error in word creation!" + error, type: "value" });
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Group>
        <label htmlFor="inspectWord">Palavra de Inspeção*</label>
        <div className="input-submit-wrapper">
          <Input
            type="text"
            id="inspectWord"
            aria-label="Palavra de inspeção"
            placeholder="Digite sua palavra"
            {...register("inspectWord", { required: true, minLength: 4 })}
          />
          <SubmitInput type="submit" value={isSubmitting ? "Carregando" : "Procurar"} />
        </div>
        {errors?.inspectWord?.type === "required" ? (
          <span role="alert">Campo Obrigatório*</span>
        ) : null}
        {errors?.inspectWord?.type === "minLength" ? (
          <span role="alert">Tamanho minimo de 4 caracteres*</span>
        ) : null}
        {errors?.inspectWord?.type === "value" ? (
          <span role="alert">Palavra já existe na lista!</span>
        ) : null}
      </Group>
    </Form>
  );
}
