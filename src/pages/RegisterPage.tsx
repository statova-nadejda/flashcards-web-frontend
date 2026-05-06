import { AuthLayout } from "~/components/AuthLayout";
import { Button, Checkbox, FormField, Input } from "~/components/ui";
import { routePaths } from "~/utils/routePaths";

import { Link } from "react-router";

const RegisterPage: React.FC = () => {
  return (
    <AuthLayout>
      <div className="w-full max-w-[390px]">
        <h1 className="text-center text-2xl font-semibold leading-tight text-stone-700">
          <span className="mt-1 block text-lg font-large">
            Регистрируйся и начни учиться в своем темпе!
          </span>
        </h1>

        <div className="grid gap-4">
          <FormField htmlFor="nickname" label="Никнейм">
            <Input id="nickname" name="nickname" />
          </FormField>

          <FormField htmlFor="email" label="Email">
            <Input id="email" name="email" type="email" />
          </FormField>

          <FormField htmlFor="password" label="Пароль">
            <Input id="password" name="password" type="password" />
          </FormField>

          <Checkbox label="Запомнить меня" name="rememberMe" />

          <Button>Регистрация</Button>
        </div>

        <p className="mt-5 text-center text-sm text-stone-700">
          Уже есть аккаунт?{" "}
          <Link className="font-semibold text-sky-700" to={routePaths.Login}>
            Войти
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
