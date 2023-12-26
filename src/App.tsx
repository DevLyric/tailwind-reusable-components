import Button from "./components/Button";
import { ButtonType, ButtonSize } from "./theme";

export default function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Button type={ButtonType.delete} size={ButtonSize.lg}>
        button
      </Button>
    </div>
  );
}
