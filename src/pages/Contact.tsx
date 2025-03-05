import { useState } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Mail, } from "lucide-react";
import { toast } from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formDataObject = new FormData(event.currentTarget);

    formDataObject.append("access_key", "2758c26b-f6db-4c65-9f6d-462cf6f8a188");

    const object = Object.fromEntries(formDataObject.entries());
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    setLoading(false);

    if (res.success) {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark-green p-6">
      <Card className="w-full max-w-lg p-8 bg-mint-green shadow-xl rounded-2xl border border-soft-yellow">
        <CardContent>
          <h2 className="text-3xl font-bold text-dark-green text-center mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-dark-green font-medium mb-2">Name</label>
              <Input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 text-black rounded-lg border border-soft-yellow bg-white focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block text-dark-green font-medium mb-2">Email</label>
              <Input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 text-black rounded-lg border border-soft-yellow bg-white focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block text-dark-green font-medium mb-2">Message</label>
              <Textarea
                name="message"
                required
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 text-black rounded-lg border border-soft-yellow bg-white focus:ring-2 focus:ring-yellow-500"
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full p-3 bg-soft-yellow cursor-pointer text-dark-green font-semibold rounded-lg hover:bg-yellow-400 transition-all" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
          <div className="mt-8 text-center space-y-3">
            <p className="flex items-center justify-center text-dark-green space-x-2">
              <Mail className="w-5 h-5" /> <span>nishikantraj2311@gmail.com</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
