import { AuthLayout } from "~/components/AuthLayout";
import { Button, Checkbox, FormField, Input, Label } from "~/components/ui";
import { routePaths } from "~/utils/routePaths";

import { Link } from "react-router";

export function LoginPage() {
  return (
    <AuthLayout>
      <div className="grid w-full max-w-md gap-5">
        <h1 className="text-center text-2xl font-semibold leading-tight text-stone-700">
          С возвращением!
        </h1>

        <form className="grid gap-4">
          <FormField htmlFor="email" label="Email">
            <Input id="email" name="email" type="email" />
          </FormField>

          <FormField htmlFor="password" label="Пароль">
            <Input id="password" name="password" type="password" />
          </FormField>

          <div className="flex items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Checkbox id="rememberMe" name="rememberMe" />
              <Label htmlFor="rememberMe">Запомнить меня</Label>
            </div>

            <Link
              className="font-medium text-stone-700 underline underline-offset-4"
              to="#"
            >
              Забыли пароль?
            </Link>
          </div>

          <Button className="w-full" isSubmit>
            Войти
          </Button>
        </form>

        <p className="text-center text-sm text-stone-700">
          Нет аккаунта?{" "}
          <Link
            className="font-semibold text-sky-700 underline underline-offset-4"
            to={routePaths.Register}
          >
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
