import { error } from "console";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const TodoList = () => {
  //react hook form 쓰려고 주석처리
  // const [todo, setTodo] = useState("");
  // const onChange = (event: React.FormEvent<HTMLInputElement>) => {
  //   //console log 에서는 target > value로 보이지만 값을 찾아 올 때는 currentTarget value로 찾아와야한다
  //   const {
  //     currentTarget: { value },
  //   } = event;
  //   setTodo(value);
  // };

  // //eact.FormEvent<HTMLFormElement> -> html 안에서 폼태그의 요소이다 라는 제네릭으로 선언해줌
  // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log(todo);
  // };

  //register, watch라는 key값 반환
  //watch > input에 뭐가 담겼는지 확인 >>이거 하기전에 input에 {...register("todo")} 넣어줘야함
  //register >> 약간 온체인지 느낌
  //watch >> value 보게끔해주는 역할
  //handleSubmit >> submit 역할 >> 근데 값(ㅋㅣ:밸류)도 갖고있음
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm();
  // console.log(register("todo"));
  // console.log(watch());

  const onValid = (data: any) => {
    if (data.password !== data.usename) {
      setError(
        "password",
        { message: "password and usename is not the same..." },
        { shouldFocus: true }
      );
    }
    setValue("email", "");
  };
  console.log(errors);
  //이렇게하면 내가 설정해놓은 필수값 혹은 최소길이 이런거에 부족해서 발생되는 에러를 찍어줌
  // console.log(errors);

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "500px",
          gap: "10px",
        }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Za-z0-9]+@naver.com/gm,
              message: "only naver.com email allowed",
            },
          })}
          type="text"
          placeholder="write a email"
        />
        {/* 문자열과 같은 타입일 것이야 라고 말해주는거 */}
        <span>{errors?.email?.message as string}</span>
        {/* test 라는 텍스트가 드러오면 오류발생시키고 해당 오류 문구 출력되게한다 */}
        <input
          {...register("firstname", {
            required: "write here",
            validate: (value) =>
              value.includes("test") ? "no test Allowed" : true,
            minLength: {
              value: 3,
              message: "too shorts",
            },
          })}
          type="text"
          placeholder="write a firstname"
        />
        <span>{errors?.firstname?.message as string}</span>
        <input
          {...register("lastname", {
            required: "is required",
            minLength: {
              value: 3,
              message: "too shorts",
            },
          })}
          type="text"
          placeholder="write a lastname"
        />
        <span>{errors?.lastname?.message as string}</span>
        <input
          {...register("todo", {
            required: "is required",
            minLength: {
              value: 3,
              message: "too shorts",
            },
          })}
          type="text"
          placeholder="write a todo"
        />
        <span>{errors?.todo?.message as string}</span>
        <input
          {...register("usename", {
            required: "is required",
            minLength: {
              value: 3,
              message: "too shorts",
            },
          })}
          type="text"
          placeholder="write a usename"
        />
        <span>{errors?.usename?.message as string}</span>
        <input
          {...register("password", {
            required: "password is required",
            minLength: {
              value: 5,
              message: "your password is too short",
            },
          })}
          type="text"
          placeholder="write a password"
        />
        <span>{errors?.password?.message as string}</span>
        <button>ADD</button>
        <span>{errors?.password?.message as string}</span>
      </form>
    </div>
  );
};

export default TodoList;
