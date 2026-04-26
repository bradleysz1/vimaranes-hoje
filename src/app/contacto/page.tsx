import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contacto
          </h1>
          <p className="text-xl text-gray-600">
            Entre em contacto connosco. Estamos aqui para o ajudar.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contacto */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Informações de Contacto
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-guimaraes-blue p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">redacao@vimaraneshoje.pt</p>
                  <p className="text-gray-600">publicidade@vimaraneshoje.pt</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-guimaraes-blue p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Telefone</h3>
                  <p className="text-gray-600">+351 253 123 456</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-guimaraes-blue p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Morada</h3>
                  <p className="text-gray-600">
                    Rua de Santa Maria, 123<br />
                    4810-443 Guimarães<br />
                    Portugal
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Horário de Funcionamento
              </h3>
              <div className="text-gray-600">
                <p>Segunda a Sexta: 9h00 - 18h00</p>
                <p>Sábado: 9h00 - 13h00</p>
                <p>Domingo: Encerrado</p>
              </div>
            </div>
          </div>

          {/* Formulário de Contacto */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Envie-nos uma Mensagem
            </h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-guimaraes-blue focus:border-transparent"
                  placeholder="O seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-guimaraes-blue focus:border-transparent"
                  placeholder="redacao@vimaraneshoje.pt"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-guimaraes-blue focus:border-transparent"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-guimaraes-blue focus:border-transparent"
                  placeholder="A sua mensagem..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary bg-guimaraes-blue hover:bg-blue-700"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}