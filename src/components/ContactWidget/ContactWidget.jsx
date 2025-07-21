import { useState } from "react";
import sendMail from "../../Widgets/SendMail";

export default function ContactWidget({ color = '#325f5aff' }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg(null);

    try {
      await sendMail(formData.name, formData.email, formData.message);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      console.error("Erreur d'envoi complète :", error);
      setErrorMsg(error?.message || JSON.stringify(error) || "Erreur inconnue");
    }

  };

  return (
    <div className="flex items-center justify-center mt-20">
      <div className="shadow-xl rounded-2xl p-6 w-full max-w border border-gray-200 text-[#ffffff]">
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-4 text-sm placeholder:text-gray-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-4 text-sm mt-10 placeholder:text-gray-400"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded px-3 py-8 text-sm mt-10 placeholder:text-gray-400"
            required
          />
          <button
            type="submit"
            className="text-white text-sm px-4 py-2 rounded w-full mt-10"
            style={{ backgroundColor: color }}
          >
            Envoyer
          </button>

          {status === "success" && (
            <p className="text-green-600 text-sm mt-1 text-center">Message envoyé !</p>
          )}
          {status === "loading" && (
            <p className="text-gray-600 text-sm mt-1 text-center">Envoi en cours…</p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm mt-1 text-center">Échec de l'envoi : {errorMsg}</p>
          )}
        </form>
      </div>
    </div>
  );
}
