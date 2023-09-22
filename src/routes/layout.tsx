import { component$, Slot } from "@builder.io/qwik";
import Header from "~/components/header/header";

export default component$(() => {
  return (
    <div class="container mx-auto">
      <Header />
      <main class="container mx-auto">
        <Slot />
      </main>
    </div>
  );
});
