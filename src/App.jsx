import React, { useState, useEffect } from 'react';
//import heroImg from './assets/hero.png'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
import './App.css'

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [quizFeedback, setQuizFeedback] = useState(null);

  // Detectar tema inicial del sistema o clase 'dark'
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleQuizAnswer = (optionIndex) => {
    if (optionIndex === 1) {
      setQuizFeedback({
        type: 'success',
        message: '¡Correcto! Azure Functions es Serverless y solo pagas por milisegundos de ejecución disparados por eventos.',
      });
    } else {
      setQuizFeedback({
        type: 'error',
        message: 'Incorrecto. Revisa el Nivel 4: las VMs cobran por tiempo encendido y Storage no ejecuta lógica.',
      });
    }
  };

  const isVisible = (text) => {
    if (!searchTerm.trim()) return true;
    return text.toLowerCase().includes(searchTerm.toLowerCase());
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans antialiased ${isDarkMode ? 'dark bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      {/* CargarPhosphor Icons externamente */}
      <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/bold/style.css" />

      {/* ENCABEZADO / NAVBAR */}
      <header className="sticky top-0 z-50 glass-header bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo y Título */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <i className="ph-bold ph-cloud text-2xl"></i>
            </div>
            <div>
              <h1 className="font-bold text-lg leading-none bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                Azure Wiki
              </h1>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">De lo básico a lo importante</span>
            </div>
          </div>

          {/* Buscador Desktop */}
          <div className="flex-1 max-w-md hidden sm:block relative">
            <i className="ph-bold ph-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar conceptos (ej. VM, Blob, VNet, IAM)..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Botones de Acción */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              title="Cambiar Tema"
            >
              <i className={`ph-bold ${isDarkMode ? 'ph-sun' : 'ph-moon'} text-lg`}></i>
            </button>
            <a
              href="#quiz"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold transition shadow-sm shadow-blue-500/30"
            >
              <i className="ph-bold ph-brain"></i> Quiz Azure
            </a>
          </div>
        </div>

        {/* Buscador Móvil */}
        <div className="px-4 pb-3 sm:hidden">
          <div className="relative">
            <i className="ph-bold ph-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar concepto..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar */}
        <aside id="sidebar" className="hidden lg:block lg:col-span-3 space-y-6">
          <div className="sticky top-24 bg-white dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 px-2">
              Ruta de Aprendizaje
            </h2>
            <nav className="space-y-1 text-sm font-medium" id="navigation">
              <a
                href="#nivel-1"
                className="nav-link flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700/50 hover:text-blue-600 transition group"
              >
                <span className="flex items-center gap-2.5">
                  <i className="ph-bold ph-baby text-emerald-500"></i> 1. Lo Básico
                </span>
                <span className="text-xs bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full font-bold">
                  Principiante
                </span>
              </a>
              <a
                href="#nivel-2"
                className="nav-link flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700/50 hover:text-blue-600 transition group"
              >
                <span className="flex items-center gap-2.5">
                  <i className="ph-bold ph-squares-four text-blue-500"></i> 2. Servicios Core
                </span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full font-bold">
                  Esencial
                </span>
              </a>
              <a
                href="#nivel-3"
                className="nav-link flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700/50 hover:text-blue-600 transition group"
              >
                <span className="flex items-center gap-2.5">
                  <i className="ph-bold ph-shield-check text-purple-500"></i> 3. Seguridad e IAM
                </span>
                <span className="text-xs bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 px-2 py-0.5 rounded-full font-bold">
                  Importante
                </span>
              </a>
              <a
                href="#nivel-4"
                className="nav-link flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700/50 hover:text-blue-600 transition group"
              >
                <span className="flex items-center gap-2.5">
                  <i className="ph-bold ph-tree-structure text-amber-500"></i> 4. Arquitectura
                </span>
                <span className="text-xs bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded-full font-bold">
                  Avanzado
                </span>
              </a>
              <a
                href="#comparativa"
                className="nav-link flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700/50 hover:text-blue-600 transition"
              >
                <i className="ph-bold ph-scales text-red-500"></i> Resumen Comparativo
              </a>
            </nav>
          </div>
        </aside>

        {/* Sección de Contenido */}
        <main className="lg:col-span-9 space-y-12">
          {/* Hero Banner */}
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 sm:p-10 shadow-xl shadow-blue-500/10">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                Guía Rápida & Completa
              </span>
              <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">Aprende Azure desde Cero</h2>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-6">
                Domina la nube de Microsoft siguiendo esta ruta progresiva. Desde conceptos fundamentales de computación en la nube hasta arquitecturas avanzadas y seguridad de nivel empresarial.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#nivel-1"
                  className="px-5 py-2.5 bg-white text-blue-600 font-bold text-sm rounded-xl hover:bg-blue-50 transition shadow"
                >
                  Comenzar Ahora
                </a>
                <a
                  href="#quiz"
                  className="px-5 py-2.5 bg-blue-800/50 hover:bg-blue-800/80 text-white font-semibold text-sm rounded-xl border border-white/20 transition"
                >
                  Ponerse a Prueba
                </a>
              </div>
            </div>
          </section>

          {/* NIVEL 1 */}
          <section id="nivel-1" className="wiki-section space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h2 className="text-2xl font-bold">Nivel 1: Conceptos Fundamentales (Lo Básico)</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">¿Qué es la nube y por qué Azure?</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {isVisible('¿Qué es Microsoft Azure? Es la plataforma de Cloud Computing de Microsoft...') && (
                <div className="wiki-card bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-950/60 rounded-xl text-emerald-600 dark:text-emerald-400">
                      <i className="ph-bold ph-globe-hemisphere-west text-2xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">¿Qué es Microsoft Azure?</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        Es la plataforma de Cloud Computing de Microsoft. Permite alquilar infraestructura de cómputo, almacenamiento y servicios gestionados alojados en datacenters globales.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {isVisible('Modelos: IaaS, PaaS, SaaS Define la responsabilidad compartida: IaaS PaaS SaaS') && (
                <div className="wiki-card bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-950/60 rounded-xl text-emerald-600 dark:text-emerald-400">
                      <i className="ph-bold ph-layers-intersect text-2xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Modelos: IaaS, PaaS, SaaS</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">Define la responsabilidad compartida:</p>
                      <ul className="text-xs space-y-1 text-slate-600 dark:text-slate-400">
                        <li>• <strong>IaaS:</strong> Tú gestionas SO y Apps (Ej. VMs).</li>
                        <li>• <strong>PaaS:</strong> Gestionas Apps y Datos (Ej. App Services).</li>
                        <li>• <strong>SaaS:</strong> Consumes el software listo (Ej. Microsoft 365).</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* NIVEL 2 */}
          <section id="nivel-2" className="wiki-section space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h2 className="text-2xl font-bold">Nivel 2: Servicios Principales (Core Services)</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Los componentes esenciales de Azure</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {isVisible('Cómputo (VMs & App Service) Servidores virtuales escalables') && (
                <div className="wiki-card bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
                  <i className="ph-bold ph-cpu text-3xl text-blue-600 mb-3 block"></i>
                  <h3 className="font-bold text-lg mb-2">Cómputo (VMs & App Service)</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Servidores virtuales escalables o plataformas completamente administradas para alojar tus webs y APIs.
                  </p>
                </div>
              )}

              {isVisible('Azure Blob Storage Almacenamiento masivo para archivos no estructurados') && (
                <div className="wiki-card bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
                  <i className="ph-bold ph-hard-drives text-3xl text-blue-600 mb-3 block"></i>
                  <h3 className="font-bold text-lg mb-2">Azure Blob Storage</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Almacenamiento masivo para archivos no estructurados (imágenes, documentos, backups, media).
                  </p>
                </div>
              )}

              {isVisible('Virtual Network (VNet) Aislamiento de red seguro') && (
                <div className="wiki-card bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
                  <i className="ph-bold ph-network text-3xl text-blue-600 mb-3 block"></i>
                  <h3 className="font-bold text-lg mb-2">Virtual Network (VNet)</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Aislamiento de red seguro para conectar recursos dentro de Azure de forma privada.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* NIVEL 3 */}
          <section id="nivel-3" className="wiki-section space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h2 className="text-2xl font-bold">Nivel 3: Seguridad, Identidad e IAM</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Protección de acceso y gestión de claves</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {isVisible('Microsoft Entra ID (Azure AD) Gestión de identidades MFA RBAC') && (
                <div className="wiki-card bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-2 text-purple-600 dark:text-purple-400">Microsoft Entra ID (Azure AD)</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Gestión de identidades, usuarios, MFA (Multi-Factor Authentication) y asignación de roles de acceso (RBAC).
                  </p>
                </div>
              )}

              {isVisible('Azure Key Vault Bóveda centralizada para guardar credenciales') && (
                <div className="wiki-card bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-2 text-purple-600 dark:text-purple-400">Azure Key Vault</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Bóveda centralizada para guardar credenciales, llaves criptográficas y secretos sin ponerlos en código fuente.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* NIVEL 4 */}
          <section id="nivel-4" className="wiki-section space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h2 className="text-2xl font-bold">Nivel 4: Arquitectura y Serverless (Avanzado)</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Servicios escalables orientados a eventos y contenedores</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {isVisible('Azure Functions Código sin servidor Serverless') && (
                <div className="wiki-card bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-2 text-amber-600 dark:text-amber-400">Azure Functions</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Código sin servidor (Serverless) que se ejecuta ante un evento especifico sin pagar servidor 24/7.
                  </p>
                </div>
              )}

              {isVisible('AKS (Azure Kubernetes Service) Gestión profesional de contenedores') && (
                <div className="wiki-card bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-2 text-amber-600 dark:text-amber-400">AKS (Azure Kubernetes Service)</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Gestión profesional de contenedores Docker en clústeres para arquitecturas de microservicios.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* COMPARATIVA */}
          <section id="comparativa" className="wiki-section bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <i className="ph-bold ph-scales text-blue-600"></i> Comparativa de Selección
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40">
                    <th className="p-3">Servicio</th>
                    <th className="p-3">Tipo</th>
                    <th className="p-3">Uso Recomendado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60">
                  <tr>
                    <td className="p-3 font-semibold text-blue-600">Azure VM</td>
                    <td className="p-3">IaaS</td>
                    <td className="p-3">Sistemas antiguos / Control completo</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-blue-600">App Service</td>
                    <td className="p-3">PaaS</td>
                    <td className="p-3">Aplicaciones Web / APIs REST</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-blue-600">Azure Functions</td>
                    <td className="p-3">Serverless</td>
                    <td className="p-3">Tareas automáticas por eventos</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* QUIZ */}
          <section id="quiz" className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-3">Quiz Rápido de Azure</h2>
            <p className="text-slate-300 text-sm mb-4">
              ¿Qué servicio usarías para ejecutar código solo cuando ocurra un evento sin pagar servidor fijo?
            </p>
            <div className="space-y-3 max-w-lg">
              <button
                onClick={() => handleQuizAnswer(0)}
                className="w-full text-left p-3 rounded-xl bg-white/10 hover:bg-white/20 transition text-sm"
              >
                A) Azure VM
              </button>
              <button
                onClick={() => handleQuizAnswer(1)}
                className="w-full text-left p-3 rounded-xl bg-white/10 hover:bg-white/20 transition text-sm"
              >
                B) Azure Functions (Serverless)
              </button>
              <button
                onClick={() => handleQuizAnswer(2)}
                className="w-full text-left p-3 rounded-xl bg-white/10 hover:bg-white/20 transition text-sm"
              >
                C) Azure Blob Storage
              </button>
            </div>

            {quizFeedback && (
              <div
                className={`mt-4 p-4 rounded-xl text-sm font-medium ${
                  quizFeedback.type === 'success'
                    ? 'bg-emerald-500/20 text-emerald-200'
                    : 'bg-red-500/20 text-red-200'
                }`}
              >
                <strong>{quizFeedback.type === 'success' ? '¡Correcto!' : 'Incorrecto.'}</strong> {quizFeedback.message}
              </div>
            )}
          </section>
        </main>
      </div>

      {/* FOOTER */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-slate-500 dark:text-slate-400">
          Azure Mini Wiki &copy; {new Date().getFullYear()} - Guía Práctica de Cloud
        </div>
      </footer>
    </div>
  );
}