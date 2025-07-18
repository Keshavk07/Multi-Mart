import { Button } from "@/components/ui/button";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";


export default function Home() {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-y-4">
        <div>
          <Button variant={"elevated"}>
            I am a buttom
          </Button>

        </div>
        <div>
          <Progress
            value={67}
          />
           
        </div>
        <div>
          <Input placeholder="I am an input"/>
        </div>
        <div>
          <Textarea placeholder="I am textarea"/>
        </div>
        <div>
          <Checkbox />
        </div>
      </div>
    </div>
  );
}
