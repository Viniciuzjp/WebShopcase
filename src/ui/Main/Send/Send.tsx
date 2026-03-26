import Button from "@/components/button/Button";
import InputForm from "@/components/Input/InputForm";


export default function Send () {
    return (
        <main className="bg-neutral-950">
            <section className="container mx-auto p-10 space-y-12">
                <div className="flex flex-col justify-center items-center gap-4">
                    <h1 className="text-3xl font-bold text-white">
                        Permaneça Atualizado
                    </h1>
                    <p className="text-md font-light text-white">
                        Inscreva-se para receber as novidades e promoções exclusivas, alem de receber descontos exclusivos.
                    </p>
                    <div className="flex gap-2">
                    <InputForm className="w-full text-white" />
                    <Button className="w-3/10" type="button">Enviar</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}