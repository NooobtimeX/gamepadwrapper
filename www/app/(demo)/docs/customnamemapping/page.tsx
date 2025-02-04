import { ContentLayout } from "@/components/admin-panel/content-layout";
import PlaceholderContent from "@/components/demo/placeholder-content";
import Breadcrumbs from "@/components/section/Breadcrumb";
import CodeBlock from "@/components/section/CodeBlock";
import NavigationSection from "@/components/section/NavigationSection";

export default function CategoriesPage() {
  const managerCode = `import { useEffect } from "react";
import { GamepadManager } from "@nooobtimex/gamepadwrapper";  

// Define your custom button mapping
const customButtonMapping = {
  0: { index: 0, name: "Custom A" },
  1: { index: 1, name: "Custom B" },
  2: { index: 2, name: "Custom X" },
  3: { index: 3, name: "Custom Y" },
  4: { index: 4, name: "Custom LB" },
  5: { index: 5, name: "Custom RB" },
};

export default function CustomMappingExample() {
  useEffect(() => {
    // Create an instance of GamepadManager with an update callback.
    const manager = new GamepadManager((gamepads) => {
      console.log("Gamepads updated:", gamepads);
    });

    /* 
      Set a custom mapping for your gamepad by its ID.
      Replace "YourGamepadID" with the actual gamepad.id value you wish to override.
      The 'custom' type tells the manager to use your custom mapping.
    */
    manager.setButtonMapping("YourGamepadID", "custom", customButtonMapping);

    // Cleanup the manager when the component unmounts.
    return () => {
      manager.stop();
    };
  }, []);

  // No HTML output needed.
  return null;
}`;
  return (
    <ContentLayout>
      <Breadcrumbs
        items={[
          { href: "/docs", label: "Document" },
          { href: "/docs/customnamemapping", label: "Custom Name Mapping" },
        ]}
      />
      <PlaceholderContent>
        <h1>Custom Name Mapping</h1>
        <CodeBlock language="typescript" code={managerCode} />
      </PlaceholderContent>
      <NavigationSection
        previous={{
          href: "/docs/event/vibration",
          label: "Vibration Event",
        }}
        next={{
          href: "/docs/browsercompatibility",
          label: "Browser Compatibility",
        }}
      />
    </ContentLayout>
  );
}
