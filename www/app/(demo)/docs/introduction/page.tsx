import { ContentLayout } from "@/components/admin-panel/content-layout";
import PlaceholderContent from "@/components/demo/placeholder-content";
import Breadcrumbs from "@/components/section/Breadcrumb";
import NavigationSection from "@/components/section/NavigationSection";

export default function CategoriesPage() {
  return (
    <ContentLayout title="Getting Started">
      <Breadcrumbs
        items={[
          { href: "/docs", label: "Document" },
          { href: "/docs/introduction", label: "Introduction" },
        ]}
      />
      <PlaceholderContent>
        <h1 className="text-3xl font-semibold ">Introduction</h1>
        <h2 className="text-2xl font-medium  mt-4">
          Welcome to the GamepadWrapper Documentation!
        </h2>
        <p className="mt-4 text-lg ">
          GamepadWrapper is a lightweight and easy-to-use TypeScript library
          designed to simplify working with gamepad input. It abstracts away the
          complexities of the Gamepad API, allowing developers to seamlessly
          integrate gamepad controls into their web applications, games, or
          interactive projects. Whether you're building a modern web game,
          crafting a unique controller-based experience, or prototyping for a
          creative project, GamepadWrapper gives you the tools you need to
          detect, configure, and utilize gamepad inputs effortlessly.
        </p>
        <ul className="mt-6 list-disc pl-5 ">
          <li>
            Plug-and-Play Functionality: Quickly set up gamepad support with
            minimal effort.
          </li>
          <li>
            Cross-Browser Support: Works consistently across major browsers that
            support the Gamepad API.
          </li>
          <li>
            Ease of Use: Simplified interface to get started without extensive
            configuration.
          </li>
          <li>
            Customizable Controls: Map buttons, axes, and inputs to suit your
            application’s needs.
          </li>
          <li>
            Real-Time Updates: Access live data from connected gamepads to
            create responsive interactions.
          </li>
        </ul>
        <h3 className="text-xl font-medium  mt-8">Why GamepadWrapper?</h3>
        <p className="mt-2 text-lg ">
          Integrating gamepad support directly through the browser’s native API
          can be challenging, as it involves handling low-level details like
          device discovery, input mapping, and managing multiple controllers.
          GamepadWrapper streamlines this process, letting you focus on your
          application's functionality instead of wrangling technical
          intricacies.
        </p>
        <p className="mt-2 text-lg ">
          Whether you're a seasoned developer or new to gamepad integration,
          GamepadWrapper provides a simple and intuitive way to harness the
          power of game controllers in your web projects.
        </p>
        <h3 className="mt-4 text-lg font-semibold ">
          Let’s dive in and explore how to get started!
        </h3>
      </PlaceholderContent>
      <NavigationSection
        previous={{
          href: "/docs",
          label: "Getting Started",
        }}
        next={{ href: "/docs/installation", label: "Installation" }}
      />
    </ContentLayout>
  );
}
