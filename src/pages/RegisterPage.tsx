import { AuthLayout } from "~/components/AuthLayout";
import { Button, Checkbox, FormField, Input, Label } from "~/components/ui";
import { routePaths } from "~/utils/routePaths";

import { Link } from "react-router";

export function RegisterPage() {
  return (
    <AuthLayout>
      <div className="grid w-full max-w-md gap-5">
        <h1 className="text-center text-2xl font-semibold leading-tight text-stone-700">
          <span className="mt-1 block text-lg font-semibold">
            Регистрируйся и начни учиться в своем темпе!
          </span>
        </h1>

        <form className="grid gap-4">
          <FormField htmlFor="nickname" label="Никнейм">
            <Input id="nickname" name="nickname" />
          </FormField>

          <FormField htmlFor="email" label="Email">
            <Input id="email" name="email" type="email" />
          </FormField>

          <FormField htmlFor="password" label="Пароль">
            <Input id="password" name="password" type="password" />
          </FormField>

          <div className="flex items-center gap-2">
            <Checkbox id="registerRememberMe" name="rememberMe" />
            <Label htmlFor="registerRememberMe">Запомнить меня</Label>
          </div>

          <Button className="w-full" isSubmit>
            Регистрация
          </Button>
        </form>

        <p className="text-center text-sm text-stone-700">
          Уже есть аккаунт?{" "}
          <Link
            className="font-semibold text-sky-700 underline underline-offset-4"
            to={routePaths.Login}
          >
            Войти
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
