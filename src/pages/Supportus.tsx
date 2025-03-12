import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover";
import { Button } from "@/components/ui/Button";
import Image from "../assets/image/qr.jpeg";

const SupportUs = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="border border-[#60A5FA] text-[#60A5FA] hover:bg-[#60A5FA] hover:text-white cursor-pointer">
          Support Us
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 text-center bg-white rounded-lg shadow-lg border border-gray-200">
        <p className="text-lg font-semibold text-gray-800">
          Support us to keep the service free
        </p>
        <p className="text-sm text-gray-600 mt-2">
          We want to host our backend on a purchased server, and that costs some pennies.
          You can support us to improve our service.
        </p>
        <div className="flex justify-center mt-4">
          <img
            src={Image}
            alt="PhonePe QR Code"
            width={200}
            height={200}
            className="rounded-md border border-gray-300"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SupportUs;
