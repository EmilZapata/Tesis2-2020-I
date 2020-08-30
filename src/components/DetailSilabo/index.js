import React from "react";

export default function DetailSilabo() {
  return (
    <div id="silabo">
      <div className="row">
        <section className="col-10">
          <h5>CONTENIDO DEL CURSO</h5>
          <div className="desarrollo-tabla">
            <table className="table table-bordered table-responsive">
              <thead>
                <tr>
                  <th className="col1">Semana</th>
                  <th className="col2">Tema</th>
                  <th className="col3">Exposiciones y Trabajos</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- ***************************** Estructura de semana **********************--> */}
                <tr>
                  <th className="col1">1</th>
                  <td className="col2">
                    <h6 className="titulo-clase">
                      Clasificación de problemas algorítmicos
                    </h6>
                    <p>
                      Presentación del curso. Clasificación de problemas
                      algorítmicos, problemas P y NP. Problemas de decisión,
                      localización y optimización. Descripción de algunos
                      problemas NP-difícil.
                    </p>
                  </td>
                  <td className="col3">
                    <a
                      target="_blank"
                      href="https://drive.google.com/file/d/16StnaU-5mu-Kkj3lUhSzzm9_fBF6YVz4/view?usp=sharing"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="fa fa-file-powerpoint-o"
                        aria-hidden="true"
                      ></i>{" "}
                      Emil Zapata{" "}
                    </a>
                  </td>
                </tr>
                {/* <!-- ***************************** Fin de semana **********************-->
            <!-- ***************************** Estructura de semana **********************--> */}
                <tr>
                  <th className="col1">2</th>
                  <td className="col2">
                    <h6 className="titulo-clase">Fundamentos de la TESIS II</h6>
                    <p>
                      Definición de la TESIS II. Máquina inteligente. Diferencia
                      entre sistemas operacionales y sistemas inteligentes.
                      Aplicaciones en la industria y servicios (robótica,
                      planificación, gestión de desperdicios). Test de Turing.
                    </p>
                  </td>
                  <td className="col3">
                    <a
                      target="_blank"
                      href="https://drive.google.com/file/d/16StnaU-5mu-Kkj3lUhSzzm9_fBF6YVz4/view?usp=sharing"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="fa fa-file-powerpoint-o"
                        aria-hidden="true"
                      ></i>{" "}
                      Emil Zapata{" "}
                    </a>
                  </td>
                </tr>
                {/* <!-- ***************************** Estructura de semana **********************--> */}
                <tr>
                  <th className="col1">3, 4</th>
                  <td className="col2">
                    <h6 className="titulo-clase">
                      Representación de problemas de juego humano – máquina como
                      búsqueda en un espacio de estado
                    </h6>
                    <p>
                      Definición de problemas de la IA como problemas de
                      búsqueda en un espacio de estado. Representación de
                      problemas de juegos humano – máquina.
                    </p>
                  </td>
                </tr>
                {/* <!-- ***************************** Fin de semana **********************-->
            <!-- ***************************** Estructura de semana **********************--> */}
                <tr>
                  <th className="col1">5</th>
                  <td className="col2">
                    <h6 className="titulo-clase">Métodos de Búsqueda Ciega</h6>
                    <p>
                      El problema de búsqueda en un espacio de estado como
                      grafo. La imposibilidad de usar métodos de caminos
                      mínimos. El concepto de los métodos de búsqueda ciega e
                      informada. El árbol de estado. Los métodos ciegos:
                      amplitud, profundidad, no-deterministico.
                    </p>
                  </td>
                </tr>
                {/* <!-- ***************************** Fin de semana **********************-->
            <!-- ***************************** Estructura de semana **********************--> */}
                <tr>
                  <th className="col1">6</th>
                  <td className="col2">
                    <h6 className="titulo-clase">
                      Métodos de búsqueda informados
                    </h6>
                    <p>
                      La función evaluadora, métodos que usan información
                      adicional: primero el mejor, ascenso a la colina, A*,
                      ramificación y acotación.
                    </p>
                  </td>
                </tr>
                {/* <!-- ***************************** Fin de semana **********************-->
            <!-- ***************************** Estructura de semana **********************--> */}
                <tr>
                  <th className="col1">7</th>
                  <td className="col2">
                    <h6 className="titulo-clase">
                      Métodos de búsqueda para juegos humano-máquina
                    </h6>
                    <p>
                      Algoritmo de juego humano – máquina. Estrategias de juego
                      de máquina: no determinístico, primero el mejor, min-max y
                      mejor diferencia de utilidades. Algoritmo min-max y
                      alfa-beta.
                    </p>
                  </td>
                </tr>
                {/* <!-- ***************************** Fin de semana **********************--> */}
                <tr>
                  <th className="col1">8</th>
                  <td className="col2">
                    <h6 className="titulo-clase">Exámen Parcial</h6>
                  </td>
                </tr>
                {/* <!-- ***************************** Fin de semana **********************-->
            <!--Estructura de semana **********************--> */}
                <tr>
                  <th className="col1">9</th>
                  <td className="col2">
                    <h6 className="titulo-clase">
                      Fundamentos de sistemas expertos
                    </h6>
                    <p>
                      Definición de Sistemas Expertos. Arquitectura de un
                      sistema experto. Taxonomía y aplicaciones de los sistemas
                      expertos. Requisitos para el desarrollo de sistemas
                      expertos y ventajas del uso de sistemas expertos. Algunos
                      problemas basados en el conocimiento.
                    </p>
                  </td>
                </tr>
                {/* <!-- ***************************** Fin de semana **********************-->
            <!--Estructura de semana  10 **********************--> */}
                <tr>
                  <th className="col1">10</th>
                  <td className="col2">
                    <h6 className="titulo-clase">Ingeniería de conocimiento</h6>
                    <p>
                      Introducción. Adquisición de conocimiento. La metodología
                      CommonKADS. Diseño de Sistemas Expertos (SE). Ciclo de
                      vida de un SE.
                    </p>
                  </td>
                </tr>
                {/* <!-- ***************************** Fin de semana **********************-->
            <!--Estructura de semana  11 **********************--> */}
                <tr>
                  <th className="col1">11</th>
                  <td className="col2">
                    <h6 className="titulo-clase">
                      Adquisición de Conocimiento
                    </h6>
                    <p>
                      Adquisición de conocimiento. Construcción de la base de
                      hechos y base de conocimiento. Estructuras de
                      representación de conocimientos (reglas de inferencias,
                      frames, objects, ontologías, metadatos, thesaurus).
                    </p>
                  </td>
                </tr>
                {/* <!-- ***************************** Fin de semana **********************-->
            <!--Estructura de semana  12 **********************--> */}
                <tr>
                  <th className="col1">12</th>
                  <td className="col2">
                    <h6 className="titulo-clase">
                      Desarrollo de sistemas expertos basados en reglas
                    </h6>
                    <p>
                      Construcción de la base de hechos y base de conocimiento.
                      El motor de inferencia. Los métodos de encadenamiento
                      regresivo, progresivo y reversibilidad. Técnicas de
                      equiparación, el algoritmo RETE. Técnicas de resolución de
                      conflictos.
                    </p>
                  </td>
                </tr>
                {/* <!-- ***************************** Fin de semana **********************-->
            <!--Estructura de semana  13 **********************--> */}
                <tr>
                  <th className="col1">13</th>
                  <td className="col2">
                    <h6 className="titulo-clase">
                      Calidad y validación de sistemas expertos
                    </h6>
                    <p>
                      Principales errores en el desarrollo de un sistema
                      experto. Calidad de un sistema experto. Validación de
                      sistemas inteligentes, métodos cuantitativos de
                      validación. Eficiencia y error de sistemas expertos.
                      Revisión de la funcionalidad del SE del 2do trabajo.
                    </p>
                  </td>
                  <td className="col3"></td>
                </tr>
                {/* <!-- ***************************** Fin de semana **********************-->
            <!--Estructura de semana  14 **********************--> */}
                <tr>
                  <th className="col1">14</th>
                  <td className="col2">
                    <h6 className="titulo-clase">
                      Introducción a Machine Learning y heurísticas
                    </h6>
                    <p>
                      Conceptos de aprendizaje y de machine learning. Sistemas
                      experto vs machine learning. Técnicas de aprendizaje y
                      fases de desarrollo de machine learning. Aplicaciones de
                      machine learning en la industria y servicios. El problema
                      de la optimización combinatoria. Conceptos de heurísticas
                      y meta-heurísticas. Algoritmos exactos vs algoritmos
                      heurísticos. Técnicas heurísticas y meta-heurísticas.
                      Problemas de optimización combinatoria en la industria y
                      servicios.
                    </p>
                  </td>
                  <td className="col3"></td>
                </tr>
                {/* <!-- ***************************** Fin de semana **********************-->
            <!--Estructura de semana  11 **********************--> */}
                <tr>
                  <th className="col1">15</th>
                  <td className="col2">
                    <h6 className="titulo-clase">
                      Presentación de trabajos computacionales
                    </h6>
                    <p>
                      <i>
                        Los alumnos mostrarán sus habilidades en cuanto al
                        desarrollo de sistemas expertos y sus aplicaciones en
                        los sectores de la industria y servicio. Los alumnos
                        presentarán un informe y un software.
                      </i>
                    </p>
                  </td>
                </tr>
                {/* <!-- ***************************** Fin de semana **********************-->

            <!--Estructura de semana  16 **********************--> */}
                <tr>
                  <th className="col1">16</th>
                  <td className="col2">
                    <h6 className="titulo-clase">Semana de Exámen Final</h6>
                    <p></p>
                  </td>
                </tr>
                {/* <!-- ***************************** Fin de semana **********************-->

            <!--Estructura de semana  16 **********************--> */}
                <tr>
                  <th className="col1">17</th>
                  <td className="col2">
                    <h6 className="titulo-clase">
                      Proyecto IA: Ubicación en tiempo Real del Bus
                      Universitario (Burrito).
                    </h6>
                  </td>
                </tr>
                {/* <!-- ***************************** Fin de semana **********************--> */}
              </tbody>
            </table>
          </div>
        </section>
        <aside className="col-2">
          <h5>Otros grupos</h5>

          {/* <div *ngFor="let group of dataOtherGroups" className="border border-primary">
        <h3>
         'Nombre de grupo'
        </h3>
        <hr />
        <ul>
          <li *ngFor="let member of group.members">{{ member }}</li>
        </ul>
      </div> */}
        </aside>
      </div>
    </div>
  );
}
