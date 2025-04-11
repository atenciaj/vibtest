import { Question } from '../types/exam';

export const questions: Question[] = [
  {
    id: 1,
    question: '¿Cuál es la unidad de medida de la frecuencia en el Sistema Internacional?',
    options: [
      'Hertz (Hz)',
      'Metros por segundo (m/s)',
      'Newtons (N)',
      'Joules (J)'
    ],
    correctAnswer: 0,
    explanation: 'La frecuencia se mide en Hertz (Hz), que representa el número de ciclos por segundo.',
    weight: 1,
    image: undefined
  },
  {
    id: 2,
    question: '¿Qué tipo de vibración se caracteriza por tener una amplitud que varía con el tiempo?',
    options: [
      'Vibración armónica simple',
      'Vibración aleatoria',
      'Vibración periódica',
      'Vibración estacionaria'
    ],
    correctAnswer: 1,
    explanation: 'La vibración aleatoria se caracteriza por tener una amplitud que varía de manera impredecible con el tiempo.',
    weight: 1,
    image: undefined
  },
  {
    id: 3,
    question: '¿Cuál de los siguientes es un método común para reducir las vibraciones en maquinaria?',
    options: [
      'Aumentar la velocidad de operación',
      'Instalar aisladores de vibración',
      'Reducir el mantenimiento preventivo',
      'Ignorar las señales de alarma'
    ],
    correctAnswer: 1,
    explanation: 'Los aisladores de vibración son dispositivos diseñados específicamente para reducir la transmisión de vibraciones entre componentes.',
    weight: 1,
    image: undefined
  },
  {
    id: 4,
    question: '¿Qué instrumento se utiliza comúnmente para medir la velocidad de vibración?',
    options: [
      'Termómetro',
      'Velocímetro láser',
      'Manómetro',
      'Ohmímetro'
    ],
    correctAnswer: 1,
    explanation: 'El velocímetro láser es un instrumento no invasivo que permite medir la velocidad de vibración de manera precisa.',
    weight: 1,
    image: undefined
  },
  {
    id: 5,
    question: '¿Cuál es la relación entre la frecuencia natural y la frecuencia de excitación en un sistema resonante?',
    options: [
      'Son siempre iguales',
      'La frecuencia natural es siempre mayor',
      'La frecuencia natural es siempre menor',
      'No tienen relación entre sí'
    ],
    correctAnswer: 0,
    explanation: 'En un sistema resonante, la frecuencia natural coincide con la frecuencia de excitación, lo que produce una amplificación máxima de la vibración.',
    weight: 1,
    image: undefined
  },
  {
    id: 6,
    question: '¿Qué tipo de análisis se utiliza para identificar las frecuencias dominantes en una señal de vibración?',
    options: [
      'Análisis de regresión',
      'Análisis de Fourier',
      'Análisis de correlación',
      'Análisis de varianza'
    ],
    correctAnswer: 1,
    explanation: 'El análisis de Fourier permite descomponer una señal de vibración en sus componentes de frecuencia, facilitando la identificación de frecuencias dominantes.',
    weight: 1,
    image: undefined
  },
  {
    id: 7,
    question: '¿Cuál es el efecto principal de un desbalance en un rotor?',
    options: [
      'Aumento de temperatura',
      'Vibración sincrónica',
      'Reducción de velocidad',
      'Aumento de presión'
    ],
    correctAnswer: 1,
    explanation: 'El desbalance en un rotor produce una vibración sincrónica, es decir, la frecuencia de vibración coincide con la velocidad de rotación.',
    weight: 1,
    image: undefined
  },
  {
    id: 8,
    question: '¿Qué tipo de mantenimiento se recomienda para prevenir fallos por vibración?',
    options: [
      'Mantenimiento correctivo',
      'Mantenimiento preventivo basado en condición',
      'Mantenimiento reactivo',
      'Sin mantenimiento'
    ],
    correctAnswer: 1,
    explanation: 'El mantenimiento preventivo basado en condición utiliza el monitoreo de vibraciones para programar intervenciones antes de que ocurran fallos.',
    weight: 1,
    image: undefined
  },
  {
    id: 9,
    question: '¿Cuál es la unidad de medida de la aceleración de vibración?',
    options: [
      'Metros (m)',
      'Metros por segundo (m/s)',
      'Metros por segundo al cuadrado (m/s²)',
      'Hertz (Hz)'
    ],
    correctAnswer: 2,
    explanation: 'La aceleración de vibración se mide en metros por segundo al cuadrado (m/s²), que representa el cambio de velocidad por unidad de tiempo.',
    weight: 1,
    image: undefined
  },
  {
    id: 10,
    question: '¿Qué tipo de fallo produce una vibración con frecuencia igual a la velocidad de rotación multiplicada por el número de dientes?',
    options: [
      'Desbalance',
      'Desalineación',
      'Fallo en engranajes',
      'Fallo en rodamientos'
    ],
    correctAnswer: 2,
    explanation: 'Un fallo en engranajes produce una vibración cuya frecuencia característica es igual a la velocidad de rotación multiplicada por el número de dientes del engranaje.',
    weight: 1,
    image: undefined
  },
  {
    id: 11,
    question: '¿Qué tipo de vibración se caracteriza por tener una amplitud constante y una frecuencia fija?',
    options: [
      'Vibración armónica simple',
      'Vibración aleatoria',
      'Vibración transitoria',
      'Vibración caótica'
    ],
    correctAnswer: 0,
    explanation: 'La vibración armónica simple se caracteriza por tener una amplitud constante y una frecuencia fija, siguiendo un patrón sinusoidal.',
    weight: 1,
    image: undefined
  },
  {
    id: 12,
    question: '¿Cuál es la unidad de medida de la amplitud de vibración?',
    options: [
      'Hertz (Hz)',
      'Metros (m)',
      'Newtons (N)',
      'Joules (J)'
    ],
    correctAnswer: 1,
    explanation: 'La amplitud de vibración se mide en metros (m), que representa la distancia máxima que se desplaza un punto desde su posición de equilibrio.',
    weight: 1,
    image: undefined
  },
  {
    id: 13,
    question: '¿Qué tipo de fallo produce una vibración con frecuencia igual a la velocidad de rotación?',
    options: [
      'Desalineación',
      'Desbalance',
      'Fallo en rodamientos',
      'Fallo en engranajes'
    ],
    correctAnswer: 1,
    explanation: 'El desbalance produce una vibración cuya frecuencia coincide con la velocidad de rotación del rotor.',
    weight: 1,
    image: undefined
  },
  {
    id: 14,
    question: '¿Cuál de los siguientes es un método para reducir la vibración en maquinaria?',
    options: [
      'Aumentar la velocidad de operación',
      'Instalar aisladores de vibración',
      'Reducir el mantenimiento preventivo',
      'Ignorar las señales de alarma'
    ],
    correctAnswer: 1,
    explanation: 'Los aisladores de vibración son dispositivos diseñados específicamente para reducir la transmisión de vibraciones entre componentes.',
    weight: 1,
    image: undefined
  },
  {
    id: 15,
    question: '¿Qué instrumento se utiliza comúnmente para medir la aceleración de vibración?',
    options: [
      'Termómetro',
      'Acelerómetro',
      'Manómetro',
      'Ohmímetro'
    ],
    correctAnswer: 1,
    explanation: 'El acelerómetro es un instrumento diseñado específicamente para medir la aceleración de vibración en maquinaria.',
    weight: 1,
    image: undefined
  },
  {
    id: 16,
    question: '¿Cuál es la relación entre la frecuencia natural y la frecuencia de excitación en un sistema no resonante?',
    options: [
      'Son siempre iguales',
      'La frecuencia natural es siempre mayor',
      'La frecuencia natural es siempre menor',
      'No tienen relación entre sí'
    ],
    correctAnswer: 2,
    explanation: 'En un sistema no resonante, la frecuencia natural es menor que la frecuencia de excitación, lo que reduce la amplificación de la vibración.',
    weight: 1,
    image: undefined
  },
  {
    id: 17,
    question: '¿Qué tipo de análisis se utiliza para identificar patrones en señales de vibración a lo largo del tiempo?',
    options: [
      'Análisis de regresión',
      'Análisis de tendencia',
      'Análisis de correlación',
      'Análisis de varianza'
    ],
    correctAnswer: 1,
    explanation: 'El análisis de tendencia permite identificar patrones y cambios en las señales de vibración a lo largo del tiempo, facilitando la predicción de fallos.',
    weight: 1,
    image: undefined
  },
  {
    id: 18,
    question: '¿Cuál es el efecto principal de una desalineación en un sistema de transmisión?',
    options: [
      'Aumento de temperatura',
      'Vibración a 2x la velocidad de rotación',
      'Reducción de velocidad',
      'Aumento de presión'
    ],
    correctAnswer: 1,
    explanation: 'La desalineación produce una vibración cuya frecuencia es el doble de la velocidad de rotación, debido al movimiento excéntrico de los ejes.',
    weight: 1,
    image: undefined
  },
  {
    id: 19,
    question: '¿Qué tipo de mantenimiento se recomienda para sistemas críticos con alta probabilidad de fallo?',
    options: [
      'Mantenimiento correctivo',
      'Mantenimiento preventivo basado en tiempo',
      'Mantenimiento reactivo',
      'Sin mantenimiento'
    ],
    correctAnswer: 1,
    explanation: 'El mantenimiento preventivo basado en tiempo es recomendado para sistemas críticos, ya que permite intervenciones programadas antes de que ocurran fallos.',
    weight: 1,
    image: undefined
  },
  {
    id: 20,
    question: '¿Cuál es la unidad de medida de la velocidad de vibración?',
    options: [
      'Metros (m)',
      'Metros por segundo (m/s)',
      'Metros por segundo al cuadrado (m/s²)',
      'Hertz (Hz)'
    ],
    correctAnswer: 1,
    explanation: 'La velocidad de vibración se mide en metros por segundo (m/s), que representa la tasa de cambio de la posición de un punto vibrante.',
    weight: 1,
    image: undefined
  },
  {
    id: 21,
    question: '¿Qué tipo de fallo produce una vibración con frecuencias múltiples de la velocidad de rotación?',
    options: [
      'Desbalance',
      'Desalineación',
      'Fallo en engranajes',
      'Fallo en rodamientos'
    ],
    correctAnswer: 2,
    explanation: 'Un fallo en engranajes produce vibraciones con frecuencias múltiples de la velocidad de rotación, debido a la interacción entre los dientes.',
    weight: 1,
    image: undefined
  },
  {
    id: 22,
    question: '¿Cuál de los siguientes es un método para reducir la vibración en estructuras?',
    options: [
      'Aumentar la rigidez',
      'Instalar amortiguadores',
      'Reducir el mantenimiento preventivo',
      'Ignorar las señales de alarma'
    ],
    correctAnswer: 1,
    explanation: 'Los amortiguadores son dispositivos diseñados específicamente para reducir la vibración en estructuras, disipando la energía vibratoria.',
    weight: 1,
    image: undefined
  },
  {
    id: 23,
    question: '¿Qué instrumento se utiliza comúnmente para medir el desplazamiento de vibración?',
    options: [
      'Termómetro',
      'Desplazómetro láser',
      'Manómetro',
      'Ohmímetro'
    ],
    correctAnswer: 1,
    explanation: 'El desplazómetro láser es un instrumento no invasivo que permite medir el desplazamiento de vibración de manera precisa.',
    weight: 1,
    image: undefined
  },
  {
    id: 24,
    question: '¿Cuál es la relación entre la frecuencia natural y la frecuencia de excitación en un sistema con amortiguamiento crítico?',
    options: [
      'Son siempre iguales',
      'La frecuencia natural es siempre mayor',
      'La frecuencia natural es siempre menor',
      'No tienen relación entre sí'
    ],
    correctAnswer: 0,
    explanation: 'En un sistema con amortiguamiento crítico, la frecuencia natural coincide con la frecuencia de excitación, pero la amplitud se reduce rápidamente.',
    weight: 1,
    image: undefined
  },
  {
    id: 25,
    question: '¿Qué tipo de análisis se utiliza para identificar la causa raíz de fallos por vibración?',
    options: [
      'Análisis de regresión',
      'Análisis de causa raíz',
      'Análisis de correlación',
      'Análisis de varianza'
    ],
    correctAnswer: 1,
    explanation: 'El análisis de causa raíz permite identificar los factores fundamentales que contribuyen a los fallos por vibración, facilitando la implementación de soluciones efectivas.',
    weight: 1,
    image: undefined
  },
  {
    id: 26,
    question: '¿Cuál es el efecto principal de un fallo en rodamientos?',
    options: [
      'Aumento de temperatura',
      'Vibración con frecuencias características',
      'Reducción de velocidad',
      'Aumento de presión'
    ],
    correctAnswer: 1,
    explanation: 'Un fallo en rodamientos produce vibraciones con frecuencias características que dependen de la geometría del rodamiento y la velocidad de rotación.',
    weight: 1,
    image: undefined
  },
  {
    id: 27,
    question: '¿Qué tipo de mantenimiento se recomienda para sistemas con baja probabilidad de fallo?',
    options: [
      'Mantenimiento correctivo',
      'Mantenimiento basado en condición',
      'Mantenimiento reactivo',
      'Sin mantenimiento'
    ],
    correctAnswer: 1,
    explanation: 'El mantenimiento basado en condición es recomendado para sistemas con baja probabilidad de fallo, ya que permite intervenciones solo cuando es necesario.',
    weight: 1,
    image: undefined
  },
  {
    id: 28,
    question: '¿Cuál es la unidad de medida de la energía de vibración?',
    options: [
      'Metros (m)',
      'Metros por segundo (m/s)',
      'Joules (J)',
      'Hertz (Hz)'
    ],
    correctAnswer: 2,
    explanation: 'La energía de vibración se mide en Joules (J), que representa la capacidad de realizar trabajo asociada con el movimiento vibratorio.',
    weight: 1,
    image: undefined
  },
  {
    id: 29,
    question: '¿Qué tipo de fallo produce una vibración con frecuencia igual a la velocidad de rotación dividida por el número de paletas?',
    options: [
      'Desbalance',
      'Desalineación',
      'Fallo en ventilador',
      'Fallo en rodamientos'
    ],
    correctAnswer: 2,
    explanation: 'Un fallo en ventilador produce una vibración cuya frecuencia es igual a la velocidad de rotación dividida por el número de paletas, debido a la interacción con el fluido.',
    weight: 1,
    image: undefined
  },
  {
    id: 30,
    question: '¿Cuál de los siguientes es un método para reducir la vibración en sistemas hidráulicos?',
    options: [
      'Aumentar la presión',
      'Instalar acumuladores',
      'Reducir el mantenimiento preventivo',
      'Ignorar las señales de alarma'
    ],
    correctAnswer: 1,
    explanation: 'Los acumuladores son dispositivos diseñados específicamente para reducir las pulsaciones y vibraciones en sistemas hidráulicos.',
    weight: 1,
    image: undefined
  },
  {
    id: 31,
    question: '¿Qué instrumento se utiliza comúnmente para medir la fase de vibración?',
    options: [
      'Termómetro',
      'Fasímetro',
      'Manómetro',
      'Ohmímetro'
    ],
    correctAnswer: 1,
    explanation: 'El fasímetro es un instrumento diseñado específicamente para medir la fase de vibración, permitiendo identificar la relación temporal entre diferentes puntos vibrantes.',
    weight: 1,
    image: undefined
  },
  {
    id: 32,
    question: '¿Cuál es la relación entre la frecuencia natural y la frecuencia de excitación en un sistema con amortiguamiento variable?',
    options: [
      'Son siempre iguales',
      'La frecuencia natural es siempre mayor',
      'La frecuencia natural es siempre menor',
      'No tienen relación entre sí'
    ],
    correctAnswer: 2,
    explanation: 'En un sistema con amortiguamiento variable, la frecuencia natural es menor que la frecuencia de excitación, y la relación entre ambas puede cambiar con el tiempo.',
    weight: 1,
    image: undefined
  },
  {
    id: 33,
    question: '¿Qué tipo de análisis se utiliza para identificar la severidad de fallos por vibración?',
    options: [
      'Análisis de regresión',
      'Análisis de severidad',
      'Análisis de correlación',
      'Análisis de varianza'
    ],
    correctAnswer: 1,
    explanation: 'El análisis de severidad permite evaluar la magnitud y el impacto de los fallos por vibración, facilitando la priorización de intervenciones.',
    weight: 1,
    image: undefined
  },
  {
    id: 34,
    question: '¿Cuál es el efecto principal de un fallo en correas de transmisión?',
    options: [
      'Aumento de temperatura',
      'Vibración con frecuencias múltiples',
      'Reducción de velocidad',
      'Aumento de presión'
    ],
    correctAnswer: 1,
    explanation: 'Un fallo en correas de transmisión produce vibraciones con frecuencias múltiples, debido a la interacción entre las correas y las poleas.',
    weight: 1,
    image: undefined
  },
  {
    id: 35,
    question: '¿Qué tipo de mantenimiento se recomienda para sistemas con alta probabilidad de fallo?',
    options: [
      'Mantenimiento correctivo',
      'Mantenimiento preventivo basado en condición',
      'Mantenimiento reactivo',
      'Sin mantenimiento'
    ],
    correctAnswer: 1,
    explanation: 'El mantenimiento preventivo basado en condición es recomendado para sistemas con alta probabilidad de fallo, ya que permite intervenciones programadas antes de que ocurran fallos.',
    weight: 1,
    image: undefined
  },
  {
    id: 36,
    question: '¿Cuál es la unidad de medida de la potencia de vibración?',
    options: [
      'Metros (m)',
      'Metros por segundo (m/s)',
      'Watts (W)',
      'Hertz (Hz)'
    ],
    correctAnswer: 2,
    explanation: 'La potencia de vibración se mide en Watts (W), que representa la tasa de transferencia de energía asociada con el movimiento vibratorio.',
    weight: 1,
    image: undefined
  },
  {
    id: 37,
    question: '¿Qué tipo de fallo produce una vibración con frecuencia igual a la velocidad de rotación multiplicada por el número de álabes?',
    options: [
      'Desbalance',
      'Desalineación',
      'Fallo en turbina',
      'Fallo en rodamientos'
    ],
    correctAnswer: 2,
    explanation: 'Un fallo en turbina produce una vibración cuya frecuencia es igual a la velocidad de rotación multiplicada por el número de álabes, debido a la interacción con el fluido.',
    weight: 1,
    image: undefined
  },
  {
    id: 38,
    question: '¿Cuál de los siguientes es un método para reducir la vibración en sistemas neumáticos?',
    options: [
      'Aumentar la presión',
      'Instalar silenciadores',
      'Reducir el mantenimiento preventivo',
      'Ignorar las señales de alarma'
    ],
    correctAnswer: 1,
    explanation: 'Los silenciadores son dispositivos diseñados específicamente para reducir las pulsaciones y vibraciones en sistemas neumáticos.',
    weight: 1,
    image: undefined
  },
  {
    id: 39,
    question: '¿Qué instrumento se utiliza comúnmente para medir la forma de onda de vibración?',
    options: [
      'Termómetro',
      'Osciloscopio',
      'Manómetro',
      'Ohmímetro'
    ],
    correctAnswer: 1,
    explanation: 'El osciloscopio es un instrumento diseñado específicamente para visualizar la forma de onda de vibración, permitiendo identificar patrones y anomalías.',
    weight: 1,
    image: undefined
  },
  {
    id: 40,
    question: '¿Cuál es la relación entre la frecuencia natural y la frecuencia de excitación en un sistema con amortiguamiento supercrítico?',
    options: [
      'Son siempre iguales',
      'La frecuencia natural es siempre mayor',
      'La frecuencia natural es siempre menor',
      'No tienen relación entre sí'
    ],
    correctAnswer: 2,
    explanation: 'En un sistema con amortiguamiento supercrítico, la frecuencia natural es menor que la frecuencia de excitación, lo que reduce significativamente la amplificación de la vibración.',
    weight: 1,
    image: undefined
  },
  {
    id: 41,
    question: '¿Qué tipo de análisis se utiliza para identificar la propagación de fallos por vibración?',
    options: [
      'Análisis de regresión',
      'Análisis de propagación',
      'Análisis de correlación',
      'Análisis de varianza'
    ],
    correctAnswer: 1,
    explanation: 'El análisis de propagación permite evaluar cómo se propagan los fallos por vibración a través de un sistema, facilitando la identificación de puntos críticos.',
    weight: 1,
    image: undefined
  },
  {
    id: 42,
    question: '¿Cuál es el efecto principal de un fallo en bombas centrífugas?',
    options: [
      'Aumento de temperatura',
      'Vibración con frecuencias características',
      'Reducción de velocidad',
      'Aumento de presión'
    ],
    correctAnswer: 1,
    explanation: 'Un fallo en bombas centrífugas produce vibraciones con frecuencias características que dependen de la geometría del impulsor y la velocidad de rotación.',
    weight: 1,
    image: undefined
  },
  {
    id: 43,
    question: '¿Qué tipo de mantenimiento se recomienda para sistemas con probabilidad media de fallo?',
    options: [
      'Mantenimiento correctivo',
      'Mantenimiento preventivo basado en tiempo y condición',
      'Mantenimiento reactivo',
      'Sin mantenimiento'
    ],
    correctAnswer: 1,
    explanation: 'El mantenimiento preventivo basado en tiempo y condición es recomendado para sistemas con probabilidad media de fallo, combinando intervenciones programadas con monitoreo continuo.',
    weight: 1,
    image: undefined
  },
  {
    id: 44,
    question: '¿Cuál es la unidad de medida de la intensidad de vibración?',
    options: [
      'Metros (m)',
      'Metros por segundo (m/s)',
      'Decibelios (dB)',
      'Hertz (Hz)'
    ],
    correctAnswer: 2,
    explanation: 'La intensidad de vibración se mide en Decibelios (dB), que representa el nivel de energía vibratoria en una escala logarítmica.',
    weight: 1,
    image: undefined
  },
  {
    id: 45,
    question: '¿Qué tipo de fallo produce una vibración con frecuencia igual a la velocidad de rotación multiplicada por el número de polos?',
    options: [
      'Desbalance',
      'Desalineación',
      'Fallo en motor eléctrico',
      'Fallo en rodamientos'
    ],
    correctAnswer: 2,
    explanation: 'Un fallo en motor eléctrico produce una vibración cuya frecuencia es igual a la velocidad de rotación multiplicada por el número de polos, debido a la interacción entre el campo magnético y el rotor.',
    weight: 1,
    image: undefined
  },
  {
    id: 46,
    question: '¿Cuál de los siguientes es un método para reducir la vibración en sistemas eléctricos?',
    options: [
      'Aumentar la corriente',
      'Instalar filtros',
      'Reducir el mantenimiento preventivo',
      'Ignorar las señales de alarma'
    ],
    correctAnswer: 1,
    explanation: 'Los filtros son dispositivos diseñados específicamente para reducir las interferencias y vibraciones en sistemas eléctricos.',
    weight: 1,
    image: undefined
  },
  {
    id: 47,
    question: '¿Qué instrumento se utiliza comúnmente para medir el espectro de vibración?',
    options: [
      'Termómetro',
      'Analizador de espectro',
      'Manómetro',
      'Ohmímetro'
    ],
    correctAnswer: 1,
    explanation: 'El analizador de espectro es un instrumento diseñado específicamente para medir el espectro de vibración, permitiendo identificar las frecuencias dominantes.',
    weight: 1,
    image: undefined
  },
  {
    id: 48,
    question: '¿Cuál es la relación entre la frecuencia natural y la frecuencia de excitación en un sistema con amortiguamiento variable?',
    options: [
      'Son siempre iguales',
      'La frecuencia natural es siempre mayor',
      'La frecuencia natural es siempre menor',
      'No tienen relación entre sí'
    ],
    correctAnswer: 2,
    explanation: 'En un sistema con amortiguamiento variable, la frecuencia natural es menor que la frecuencia de excitación, y la relación entre ambas puede cambiar con el tiempo.',
    weight: 1,
    image: undefined
  },
  {
    id: 49,
    question: '¿Qué tipo de análisis se utiliza para identificar la recurrencia de fallos por vibración?',
    options: [
      'Análisis de regresión',
      'Análisis de recurrencia',
      'Análisis de correlación',
      'Análisis de varianza'
    ],
    correctAnswer: 1,
    explanation: 'El análisis de recurrencia permite evaluar la frecuencia y patrones de recurrencia de fallos por vibración, facilitando la optimización de estrategias de mantenimiento.',
    weight: 1,
    image: undefined
  },
  {
    id: 50,
    question: '¿Cuál es el efecto principal de un fallo en compresores?',
    options: [
      'Aumento de temperatura',
      'Vibración con frecuencias características',
      'Reducción de velocidad',
      'Aumento de presión'
    ],
    correctAnswer: 1,
    explanation: 'Un fallo en compresores produce vibraciones con frecuencias características que dependen de la geometría del compresor y la velocidad de rotación.',
    weight: 1,
    image: undefined
  },
  {
    id: 51,
    question: 'En una planta de procesamiento crítica, detectas una tendencia creciente en la amplitud de vibración del ventilador principal. La producción está programada para las próximas 48 horas sin paradas. ¿Cuál sería la acción más apropiada?',
    options: [
      'Detener inmediatamente el equipo para evitar una falla catastrófica',
      'Aumentar la frecuencia de monitoreo y establecer límites de alarma, preparando un plan de contingencia',
      'Esperar hasta la próxima parada programada para realizar la inspección',
      'Reducir la velocidad del ventilador un 15% para disminuir la vibración'
    ],
    correctAnswer: 1,
    explanation: 'Aumentar la frecuencia de monitoreo es la acción más adecuada ya que permite gestionar el riesgo mientras se mantiene la producción. Establecer límites de alarma y preparar un plan de contingencia permite intervenir solo si la condición empeora a niveles críticos, equilibrando la confiabilidad del equipo con las necesidades operativas.',
    weight: 1,
    image: undefined
  },
  {
    id: 52,
    question: 'Durante el análisis de vibraciones de un compresor reciprocante, observas armónicos de la frecuencia de línea (60 Hz) con bandas laterales. El operador reporta un aumento de temperatura en el motor. ¿Cuál es el diagnóstico más probable?',
    options: [
      'Desbalance mecánico',
      'Problemas de lubricación',
      'Problemas eléctricos en el motor',
      'Resonancia estructural'
    ],
    correctAnswer: 2,
    explanation: 'La presencia de armónicos de la frecuencia de línea (60 Hz) con bandas laterales, junto con el aumento de temperatura en el motor, indica problemas eléctricos como barras rotas en el rotor, problemas en los devanados o alimentación desequilibrada. Esta condición requiere verificación eléctrica antes de tomar decisiones de mantenimiento.',
    weight: 1,
    image: undefined
  },
  {
    id: 53,
    question: 'En una evaluación inicial de riesgos para implementar un programa de monitoreo de vibraciones, ¿qué criterio es más importante para priorizar equipos críticos?',
    options: [
      'El costo inicial del equipo',
      'La accesibilidad para instalar sensores',
      'El impacto en la seguridad y producción si el equipo falla',
      'La antigüedad del equipo'
    ],
    correctAnswer: 2,
    explanation: 'El impacto en la seguridad y producción es el criterio más importante para priorizar equipos críticos en un programa de monitoreo de vibraciones. Este enfoque basado en riesgos asegura que los recursos limitados se asignen a los equipos cuya falla tendría las consecuencias más graves, optimizando así el retorno de inversión del programa.',
    weight: 1,
    image: undefined
  },
  {
    id: 54,
    question: 'Durante una medición rutinaria en una bomba de alta presión, detectas un pico a 1X RPM con amplitud de 7.5 mm/s RMS. La última medición mostraba 3.2 mm/s. La norma ISO 10816-3 establece un límite de 7.1 mm/s para esta máquina. ¿Qué acción recomendarías?',
    options: [
      'No tomar acción, ya que está dentro del rango operativo aceptable',
      'Aumentar la frecuencia de monitoreo e investigar la causa del incremento',
      'Programar mantenimiento correctivo en la próxima parada',
      'Detener la bomba inmediatamente para realizar mantenimiento'
    ],
    correctAnswer: 1,
    explanation: 'El incremento significativo de vibración de 3.2 a 7.5 mm/s, superando el límite establecido por la norma ISO 10816-3, indica un deterioro acelerado de la condición. Aumentar la frecuencia de monitoreo permite evaluar la tasa de progresión mientras se investigan las causas, facilitando decisiones informadas sobre la urgencia del mantenimiento sin detener innecesariamente un proceso crítico.',
    weight: 1,
    image: undefined
  },
  {
    id: 55,
    question: 'En un turbocompresor crítico para la producción, detectas un pico de alta frecuencia intermitente que no sigue un patrón consistente. ¿Cuál sería la mejor estrategia de diagnóstico?',
    options: [
      'Desmontar inmediatamente el equipo para inspección interna',
      'Implementar monitoreo continuo con almacenamiento de forma de onda para capturar el evento completo',
      'Incrementar la presión de aceite para ver si el síntoma desaparece',
      'Ignorar la señal si no hay otros indicadores de falla'
    ],
    correctAnswer: 1,
    explanation: 'Las vibraciones intermitentes de alta frecuencia sin patrón definido pueden indicar problemas incipientes como roce, cavitación o fallas tempranas en rodamientos. El monitoreo continuo con almacenamiento de forma de onda completa permite capturar eventos transitorios para un análisis detallado, evitando intervenciones innecesarias mientras se recopila información suficiente para un diagnóstico preciso.',
    weight: 1,
    image: undefined
  },
  {
    id: 56,
    question: 'Al configurar un programa de rutas de medición para un complejo petroquímico, ¿qué consideración es más importante para equipos en áreas clasificadas como peligrosas (Clase 1, Div 1)?',
    options: [
      'Utilizar equipos con certificación intrínsecamente seguros apropiados para la clasificación del área',
      'Realizar mediciones únicamente durante paradas programadas',
      'Duplicar el número de puntos de medición para mayor precisión',
      'Medir únicamente durante el día para mejor visibilidad'
    ],
    correctAnswer: 0,
    explanation: 'En áreas clasificadas como peligrosas (Clase 1, Div 1), es imprescindible utilizar equipos con certificación intrínsecamente seguros que cumplan con la clasificación del área. Esta es una consideración crítica de seguridad que previene riesgos de ignición en atmósferas potencialmente explosivas, cumpliendo con normativas como API RP 750 y estándares NFPA.',
    weight: 1,
    image: undefined
  },
  {
    id: 57,
    question: 'Un operador reporta ruido anormal en una bomba centrífuga crítica para el proceso. Al realizar mediciones, detectas un valor global normal pero observas un pico a frecuencia de paso de álabes (BPF) que no estaba presente anteriormente. ¿Cuál es la recomendación más adecuada?',
    options: [
      'Ignorar el hallazgo ya que el valor global está dentro de límites aceptables',
      'Programar una inspección interna en la próxima parada disponible',
      'Verificar condiciones de operación (caudal, presión, NPSH) y comparar con el punto óptimo de diseño',
      'Reemplazar inmediatamente el impulsor'
    ],
    correctAnswer: 2,
    explanation: 'La aparición de un pico en la frecuencia de paso de álabes (BPF) con valores globales normales indica un problema hidráulico potencial. Verificar las condiciones operativas permite determinar si la bomba está operando fuera de su punto óptimo de diseño, lo que puede causar cavitación, recirculación o turbulencia. Esta estrategia resuelve problemas operativos antes de considerar intervenciones mecánicas más costosas.',
    weight: 1,
    image: undefined
  },
  {
    id: 58,
    question: 'Durante el análisis de fase en un ventilador industrial, observas un desfase de aproximadamente 180° entre mediciones horizontales en los lados acoplado y libre. ¿Qué condición indica este patrón?',
    options: [
      'Desbalance',
      'Desalineación angular',
      'Eje doblado',
      'Resonancia estructural'
    ],
    correctAnswer: 2,
    explanation: 'Un desfase de aproximadamente 180° entre mediciones horizontales en lados opuestos del rotor indica típicamente un eje doblado. Este patrón de fase es característico porque las partes opuestas del eje se mueven en direcciones contrarias durante la rotación cuando existe una curvatura permanente, creando un patrón de vibración único que puede distinguirse de otros problemas como desbalance o desalineación.',
    weight: 1,
    image: undefined
  },
  {
    id: 59,
    question: 'En la planificación de mediciones para un nuevo sistema de monitoreo, ¿qué factor determina principalmente la frecuencia máxima (Fmax) que debe configurarse para la adquisición de datos?',
    options: [
      'El presupuesto disponible para el proyecto',
      'La velocidad de rotación de la máquina',
      'Los modos de falla esperados y sus frecuencias características',
      'El tiempo disponible para realizar las mediciones'
    ],
    correctAnswer: 2,
    explanation: 'La frecuencia máxima (Fmax) debe seleccionarse en función de los modos de falla esperados y sus frecuencias características. Para analistas Categoría I, es fundamental configurar el Fmax para capturar todas las frecuencias relevantes de los componentes monitoreados (por ejemplo, frecuencias de falla de rodamientos, frecuencias de engrane, armónicos de desbalance), asegurando que no se pierda información diagnóstica valiosa.',
    weight: 1,
    image: undefined
  },
  {
    id: 60,
    question: 'En un análisis de tendencias de un tren de máquinas, observas que la vibración de un reductor de velocidad muestra un incremento gradual en los últimos tres meses, pero aún permanece por debajo de los límites de alarma. ¿Cuál es la mejor decisión de gestión de riesgo?',
    options: [
      'No tomar acción hasta que se supere el límite de alarma',
      'Realizar análisis complementarios (análisis de aceite, ultrasonido) para confirmar la condición',
      'Parar el equipo inmediatamente para inspección interna',
      'Reemplazar preventivamente todos los componentes en la próxima parada'
    ],
    correctAnswer: 1,
    explanation: 'Ante un incremento gradual de vibración que aún no alcanza límites de alarma, la estrategia óptima es implementar análisis complementarios como análisis de aceite o ultrasonido. Esta técnica de monitoreo multicapa permite confirmar la degradación y su causa raíz, posibilitando una planificación adecuada del mantenimiento basada en la condición real del equipo, optimizando recursos y minimizando riesgos operativos.',
    weight: 1,
    image: undefined
  },
  {
    id: 61,
    question: 'En una planta procesadora de alimentos, identificas que el motor de una línea crítica presenta niveles elevados de vibración a 2X la frecuencia de línea eléctrica. En la inspección visual, notas que los pernos de anclaje están correctamente ajustados. ¿Cuál es la causa más probable?',
    options: [
      'Problemas de transmisión',
      'Desbalance rotativo',
      'Excentricidad en el entrehierro del motor',
      'Falla en rodamientos'
    ],
    correctAnswer: 2,
    explanation: 'Las vibraciones a 2X la frecuencia de línea eléctrica (120 Hz en sistemas de 60 Hz) son características de problemas de excentricidad en el entrehierro del motor. Esta condición genera una atracción magnética variable entre el rotor y el estator, causando vibración a dos veces la frecuencia de alimentación independientemente de la velocidad de rotación, diferenciándose así de problemas mecánicos como desbalance o fallas en rodamientos.',
    weight: 1,
    image: undefined
  },
  {
    id: 62,
    question: 'Durante un análisis de criticidad para implementar un programa de monitoreo de vibraciones con recursos limitados, ¿qué equipo tiene mayor prioridad?',
    options: [
      'Un compresor de aire de respaldo con 15 años de uso y plan de mantenimiento preventivo trimestral',
      'Una bomba crítica del proceso principal sin redundancia, con historial de dos fallas en el último año',
      'Un motor nuevo de 50 HP con mantenimiento reciente',
      'Un ventilador de enfriamiento secundario con redundancia N+1'
    ],
    correctAnswer: 1,
    explanation: 'La bomba crítica sin redundancia y con historial de fallas recientes representa el mayor riesgo operativo. El análisis de criticidad debe priorizar equipos que combinen alta importancia en el proceso (sin sistemas de respaldo), consecuencias severas de falla (pérdida de producción), y probabilidad elevada de fallo (evidenciada por su historial). Este enfoque optimiza los recursos limitados de monitoreo hacia los activos con mayor impacto potencial.',
    weight: 1,
    image: undefined
  },
  {
    id: 63,
    question: 'Al instalar un acelerómetro para mediciones rutinarias en una carcasa de rodamiento, ¿qué factor afecta más significativamente la calidad de los datos recolectados?',
    options: [
      'La marca del acelerómetro',
      'El método de montaje del sensor',
      'El color del cable del sensor',
      'La hora del día cuando se realiza la medición'
    ],
    correctAnswer: 1,
    explanation: 'El método de montaje del sensor afecta directamente la respuesta en frecuencia y la transferencia de energía vibratoria al acelerómetro. Un montaje rígido (atornillado) permite capturar frecuencias más altas (hasta 20 kHz) comparado con montajes magnéticos (hasta 7 kHz) o con sondas manuales (hasta 1 kHz). Para analistas Categoría I, seleccionar el método de montaje apropiado es fundamental para asegurar mediciones confiables y repetibles.',
    weight: 1,
    image: undefined
  },
  {
    id: 64,
    question: 'En una planta de procesamiento continuo, el gerente solicita justificar la inversión en un sistema de monitoreo online para turbomaquinaria crítica. ¿Cuál es el argumento más convincente desde la perspectiva de gestión de riesgos?',
    options: [
      'El sistema permitirá reducir el personal técnico necesario',
      'El monitoreo online detectará fallas incipientes que no serían capturadas con monitoreo periódico, evitando paradas no programadas y daños catastróficos',
      'El sistema tendrá integración con la última tecnología en la nube',
      'Otros competidores en la industria ya tienen sistemas similares'
    ],
    correctAnswer: 1,
    explanation: 'El argumento más convincente es la capacidad del sistema para detectar fallas incipientes en tiempo real, proporcionando protección continua para equipos críticos. Para turbomaquinaria de alto valor, el monitoreo online captura eventos transitorios y cambios rápidos en la condición que el monitoreo periódico podría perder, reduciendo significativamente el riesgo de fallas catastróficas, paradas no planificadas y sus impactos financieros asociados.',
    weight: 1,
    image: undefined
  },
  {
    id: 65,
    question: 'Durante la puesta en marcha de una bomba centrífuga recién instalada, se detectan niveles de vibración elevados a 1X RPM. Tras verificar el balanceo, encuentras que está dentro de tolerancias. ¿Cuál debería ser tu siguiente paso de diagnóstico?',
    options: [
      'Reemplazar los rodamientos de la bomba',
      'Verificar la alineación entre motor y bomba',
      'Aumentar la rigidez de la base',
      'Cambiar el aceite lubricante'
    ],
    correctAnswer: 1,
    explanation: 'Cuando se detectan vibraciones elevadas a 1X RPM en una bomba recién instalada y se ha verificado que el balanceo está dentro de tolerancias, el siguiente paso lógico es verificar la alineación entre motor y bomba. La desalineación es una causa común de vibración dominante a 1X RPM (y a menudo con componentes a 2X RPM), particularmente en equipos recién instalados donde los procedimientos de alineación pueden haber sido inadecuados.',
    weight: 1,
    image: undefined
  },
  {
    id: 66,
    question: 'En el análisis de un espectro de vibración de un reductor de velocidad, observas picos en las frecuencias de engrane con bandas laterales espaciadas a la frecuencia de rotación del eje de entrada. ¿Qué problema indica este patrón?',
    options: [
      'Falta de lubricación',
      'Problema de alineación entre ejes',
      'Desgaste o excentricidad en el piñón de entrada',
      'Resonancia estructural'
    ],
    correctAnswer: 2,
    explanation: 'La presencia de picos en las frecuencias de engrane (GMF) acompañados de bandas laterales espaciadas a la frecuencia de rotación del eje de entrada indica problemas en el piñón de entrada, como desgaste, excentricidad o daño en los dientes. Esta modulación ocurre porque el defecto en el piñón modula la vibración de engrane una vez por cada revolución del eje de entrada, creando el patrón característico de bandas laterales.',
    weight: 1,
    image: undefined
  },
  {
    id: 67,
    question: 'Un técnico menos experimentado ha estado recolectando datos de vibración en una ruta mensual, pero los análisis de tendencia muestran variabilidad inexplicable en los valores. Como analista Categoría I responsable, ¿cuál sería tu primera acción correctiva?',
    options: [
      'Cambiar inmediatamente los instrumentos de medición',
      'Revisar y estandarizar los procedimientos de recolección de datos, incluyendo la repetibilidad de los puntos de medición',
      'Duplicar la frecuencia de las rutas de medición',
      'Implementar límites de alarma más amplios para compensar la variabilidad'
    ],
    correctAnswer: 1,
    explanation: 'La variabilidad inexplicable en los datos de tendencia suele ser resultado de inconsistencias en la recolección de datos. La estandarización de procedimientos, incluyendo la ubicación exacta de los sensores, orientación, método de montaje y condiciones operativas durante la medición, es fundamental para obtener datos comparables. Un analista Categoría I debe asegurar la repetibilidad de las mediciones como base para un análisis confiable antes de modificar equipos o parámetros de configuración.',
    weight: 1,
    image: undefined
  },
  {
    id: 68,
    question: 'En una planta con certificación ISO 9001, debes establecer criterios de aceptación para la vibración máxima permisible en bombas centrífugas nuevas. ¿Qué enfoque es más apropiado?',
    options: [
      'Usar los valores recomendados por el fabricante de las bombas',
      'Definir límites basados en la experiencia del personal de mantenimiento',
      'Adoptar los criterios de la norma ISO 10816 para la categoría correspondiente de la máquina',
      'Copiar los límites utilizados por otra planta cercana'
    ],
    correctAnswer: 2,
    explanation: 'En un entorno con certificación ISO 9001 que requiere procesos estandarizados y basados en normas, adoptar los criterios de la norma ISO 10816 es la opción más apropiada. Esta norma proporciona valores de referencia para diferentes tipos y tamaños de máquinas, clases de flexibilidad y condiciones de montaje, ofreciendo una base objetiva y reconocida internacionalmente para establecer criterios de aceptación y evaluación de la severidad de vibración.',
    weight: 1,
    image: undefined
  },
  {
    id: 69,
    question: 'Durante el análisis de vibraciones de un ventilador crítico, detectas un incremento significativo en la amplitud a 1X RPM y múltiples armónicos. La inspección visual muestra acumulación de material en las aspas. Para gestionar el riesgo operativo, ¿cuál es la recomendación más adecuada?',
    options: [
      'Continuar operando el ventilador hasta la próxima parada programada, independientemente del tiempo restante',
      'Programar una parada para limpieza de las aspas, priorizando según la tasa de cambio en la vibración y los límites operativos seguros',
      'Aumentar la velocidad del ventilador para intentar desprender el material acumulado',
      'Ignorar la condición ya que es normal en ventiladores industriales'
    ],
    correctAnswer: 1,
    explanation: 'La acumulación de material en las aspas causa desbalance, generando vibración a 1X RPM con armónicos debido a la distribución irregular del material. La recomendación más adecuada es programar una limpieza basada en la tasa de incremento de la vibración, balanceando el riesgo operativo de continuar versus el impacto de una parada no programada. Este enfoque basado en la condición permite maximizar el tiempo operativo dentro de límites seguros de vibración.',
    weight: 1,
    image: undefined
  },
  {
    id: 70,
    question: 'En una reunión de revisión de indicadores de mantenimiento, el gerente cuestiona la eficacia del programa de análisis de vibraciones. ¿Cuál es el KPI (indicador clave de desempeño) más efectivo para demostrar el valor del programa?',
    options: [
      'Número total de mediciones realizadas mensualmente',
      'Porcentaje de fallas detectadas mediante análisis de vibraciones antes de que afecten la producción (tasa de éxito predictivo)',
      'Costo del programa como porcentaje del presupuesto de mantenimiento',
      'Cantidad de equipos incluidos en el programa'
    ],
    correctAnswer: 1,
    explanation: 'El porcentaje de fallas detectadas mediante análisis de vibraciones antes de que afecten la producción (tasa de éxito predictivo) es el indicador más efectivo del valor del programa. Este KPI demuestra directamente la capacidad del análisis de vibraciones para cumplir su objetivo principal: identificar problemas incipientes con suficiente anticipación para planificar intervenciones, evitando paradas no programadas y sus costos asociados.',
    weight: 1,
    image: undefined
  },
  {
    id: 71,
    question: 'En una planta de generación eléctrica, el equipo de operaciones reporta un aumento repentino de ruido en un motor-generador diésel de emergencia durante una prueba semanal. Como analista de vibraciones de guardia, tu primera acción debe ser:',
    options: [
      'Solicitar la parada inmediata del equipo sin realizar mediciones',
      'Realizar mediciones de vibración mientras el equipo opera en diferentes condiciones de carga',
      'Programar una inspección para la semana siguiente',
      'Recomendar un aumento en la frecuencia de cambio de aceite'
    ],
    correctAnswer: 1,
    explanation: 'Ante un cambio repentino en el ruido de un equipo crítico como un generador de emergencia, la primera acción debe ser realizar mediciones de vibración en diferentes condiciones de carga. Este enfoque permite caracterizar el problema mientras el equipo está en funcionamiento, proporcionando datos objetivos para evaluar la severidad del problema y su dependencia con la carga, sin interrumpir innecesariamente la disponibilidad de un equipo de seguridad crítico.',
    weight: 1,
    image: undefined
  },
  {
    id: 72,
    question: 'Durante la revisión de las tendencias de vibración de una bomba de proceso, observas un incremento sostenido en las frecuencias asociadas a fallas en el rodamiento interior. La próxima parada programada es en 3 meses. ¿Cuál es la mejor estrategia de gestión de riesgo?',
    options: [
      'Programar el reemplazo del rodamiento en la próxima parada programada',
      'Aumentar la frecuencia de monitoreo e implementar análisis complementarios, definiendo criterios claros para una parada anticipada',
      'Continuar con el monitoreo normal sin cambiar la estrategia',
      'Detener inmediatamente la bomba para reemplazar el rodamiento'
    ],
    correctAnswer: 1,
    explanation: 'El incremento sostenido en frecuencias de falla de rodamientos indica un deterioro progresivo. La estrategia óptima es intensificar el monitoreo (aumentando frecuencia y añadiendo técnicas como ultrasonido o análisis de envolvente) mientras se establecen criterios claros que determinan cuándo es necesaria una intervención antes de la parada programada. Este enfoque permite maximar la vida útil del componente dentro de un marco controlado de riesgo.',
    weight: 1,
    image: undefined
  },
  {
    id: 73,
    question: 'En una refinería, debes seleccionar la tecnología adecuada para monitorear una bomba crítica en una zona clasificada como Clase I, División 1, Grupo B. ¿Qué consideración es prioritaria?',
    options: [
      'El costo del equipo de monitoreo',
      'La certificación intrínsecamente segura del equipo para la clasificación específica del área',
      'La marca del fabricante del sistema',
      'El tamaño del equipo de monitoreo'
    ],
    correctAnswer: 1,
    explanation: 'En áreas con clasificación Clase I, División 1, Grupo B (atmósferas con hidrógeno u otros gases altamente explosivos), la prioridad absoluta es utilizar equipos con certificación intrínsecamente segura específica para esta clasificación. Esta consideración de seguridad es mandatoria según códigos NFPA y regulaciones OSHA, superando cualquier consideración de costo o preferencia de marca, ya que previene riesgos potencialmente catastróficos.',
    weight: 1,
    image: undefined
  },
  {
    id: 74,
    question: 'En una planta de tratamiento de aguas, se detecta un aumento gradual en los niveles de vibración de una bomba sumergible. El análisis muestra incremento en componentes a 1X RPM. Antes de programar una intervención, ¿qué variable operativa debes verificar primero?',
    options: [
      'La temperatura del motor',
      'La velocidad de rotación',
      'Los niveles de líquido y posibles problemas de cavitación',
      'El consumo eléctrico'
    ],
    correctAnswer: 2,
    explanation: 'En bombas sumergibles, un incremento gradual en componentes a 1X RPM puede indicar desbalance hidráulico causado por niveles inadecuados de líquido o cavitación. Verificar primero estas condiciones operativas evita intervenciones innecesarias, ya que el problema podría resolverse ajustando parámetros de proceso. Esta verificación sigue el principio de analizar primero las causas operativas antes de asumir problemas mecánicos, optimizando recursos de mantenimiento.',
    weight: 1,
    image: undefined
  },
  {
    id: 75,
    question: 'Al implementar un programa de análisis de vibraciones en una planta farmacéutica con requisitos GMP (Good Manufacturing Practices), ¿qué aspecto es más crítico desde la perspectiva regulatoria?',
    options: [
      'Utilizar instrumentos de la marca más costosa disponible',
      'Documentar y validar los procedimientos de medición, análisis y calibración de instrumentos',
      'Contratar únicamente analistas externos',
      'Realizar mediciones diarias en todos los equipos'
    ],
    correctAnswer: 1,
    explanation: 'En entornos regulados por GMP como la industria farmacéutica, la documentación y validación de los procedimientos es el aspecto más crítico. Esto incluye protocolos verificables para calibración de instrumentos, cualificación del personal, procedimientos de medición estandarizados y trazabilidad completa de los resultados. Este enfoque cumple con requisitos regulatorios de calidad y permite demostrar ante auditorías que el programa se ejecuta bajo condiciones controladas y repetibles.',
    weight: 1,
    image: undefined
  },
  {
    id: 76,
    question: 'Durante una prueba de aceptación en fábrica (FAT) de un nuevo compresor crítico, los niveles de vibración medidos exceden ligeramente los criterios especificados en el contrato. El fabricante argumenta que el equipo cumplirá los criterios una vez instalado en su base definitiva. Como analista responsable, ¿qué decisión recomendarías?',
    options: [
      'Aceptar la explicación del fabricante sin condiciones',
      'Rechazar el equipo y solicitar uno nuevo',
      'Documentar la no conformidad y exigir una prueba de funcionamiento en sitio con garantía extendida si no se cumplen los criterios acordados',
      'Ignorar los criterios de vibración y enfocarse en otros parámetros'
    ],
    correctAnswer: 2,
    explanation: 'La mejor práctica ante esta situación es documentar formalmente la no conformidad y establecer un acuerdo que incluya pruebas de verificación en sitio con garantías extendidas. Esta estrategia protege los intereses del comprador mientras permite una resolución pragmática, reconociendo que las condiciones de base en fábrica pueden diferir de la instalación final, pero manteniendo la responsabilidad del fabricante de cumplir las especificaciones contractuales.',
    weight: 1,
    image: undefined
  },
  {
    id: 77,
    question: 'En una torre de enfriamiento, el análisis de vibraciones de un motor-ventilador muestra un pico predominante a 1X RPM en dirección axial. Tras verificar el balanceo y alineación, que están dentro de especificaciones, ¿cuál es la causa más probable del problema?',
    options: [
      'Rodamientos defectuosos',
      'Resonancia estructural',
      'Desalineación angular persistente',
      'Flexión del eje o excentricidad del rotor'
    ],
    correctAnswer: 3,
    explanation: 'Un pico predominante a 1X RPM en dirección axial, cuando el balanceo y la alineación convencional han sido verificados, sugiere flexión del eje o excentricidad del rotor. Esta condición es particularmente común en ventiladores de torres de enfriamiento debido a sus ejes largos y las difíciles condiciones ambientales que pueden causar deformación. La vibración axial es característica porque el eje doblado genera un movimiento de "latigazo" durante la rotación.',
    weight: 1,
    image: undefined
  },
  {
    id: 78,
    question: 'Un operador de una planta química reporta vibraciones intermitentes en un agitador de reactor durante ciclos específicos del proceso. Como analista, ¿qué estrategia de diagnóstico es más efectiva para capturar y caracterizar el problema?',
    options: [
      'Realizar mediciones estándar en el siguiente mantenimiento programado',
      'Implementar monitoreo temporal con trigger por nivel de vibración durante varios ciclos completos del proceso',
      'Sugerir reemplazar el agitador inmediatamente',
      'Medir solo en condiciones estables del proceso'
    ],
    correctAnswer: 1,
    explanation: 'Para problemas intermitentes asociados a ciclos específicos del proceso, el monitoreo temporal con trigger por nivel de vibración es la estrategia más efectiva. Esta técnica permite capturar automáticamente datos cuando la vibración excede un umbral predefinido, correlacionando estos eventos con las variables del proceso y condiciones operativas específicas, facilitando la identificación de la causa raíz del problema sin requerir presencia continua del analista.',
    weight: 1,
    image: undefined
  },
  {
    id: 79,
    question: 'Durante el análisis de vibraciones en un tren de máquinas (motor-reductor-bomba), observas que los espectros muestran picos coincidentes en diferentes componentes que no corresponden a frecuencias forzadas conocidas (como 1X, 2X, GMF). ¿Qué fenómeno debes investigar primero?',
    options: [
      'Problemas eléctricos en el motor',
      'Desgaste en engranajes del reductor',
      'Posible resonancia estructural en el sistema',
      'Cavitación en la bomba'
    ],
    correctAnswer: 2,
    explanation: 'La presencia de picos coincidentes en diferentes componentes que no corresponden a frecuencias forzadas conocidas sugiere una resonancia estructural. Este fenómeno amplifica vibraciones a la frecuencia natural de la estructura, afectando a múltiples componentes simultáneamente. Identificar y mitigar resonancias es prioritario porque pueden causar fallas aceleradas incluso cuando los componentes individuales están en buen estado, representando un riesgo significativo para la integridad del sistema.',
    weight: 1,
    image: undefined
  },
  {
    id: 80,
    question: 'En una planta con certificación ISO 14001 (gestión ambiental), se debe implementar un programa de monitoreo de vibraciones para equipos críticos. ¿Qué consideración adicional debe incluirse en comparación con un programa estándar?',
    options: [
      'Utilizar únicamente sensores de mayor precisión',
      'Priorizar la detección temprana de fugas en equipos que manejan sustancias peligrosas para el medio ambiente',
      'Medir exclusivamente durante el día',
      'Incrementar la frecuencia de todas las mediciones'
    ],
    correctAnswer: 1,
    explanation: 'En un contexto con certificación ISO 14001, el programa de monitoreo debe incorporar específicamente la detección temprana de condiciones que podrían resultar en impactos ambientales negativos. Esto incluye priorizar el monitoreo de equipos que manejan sustancias peligrosas y desarrollar alarmas específicas para condiciones (como desgaste en sellos o fugas incipientes) que podrían conducir a liberaciones no controladas, alineando así el programa con los objetivos de prevención de contaminación de la ISO 14001.',
    weight: 1,
    image: undefined
  },
  {
    id: 81,
    question: 'En una empresa con recursos limitados para mantenimiento predictivo, el gerente te pide optimizar el programa de análisis de vibraciones. ¿Cuál es la estrategia más efectiva para maximizar el ROI del programa?',
    options: [
      'Reducir la frecuencia de monitoreo en todos los equipos',
      'Clasificar los equipos por criticidad y ajustar la frecuencia e intensidad del monitoreo según su impacto potencial en seguridad, producción y costos',
      'Eliminar el programa y volver al mantenimiento correctivo',
      'Subcontratar todo el programa a consultores externos'
    ],
    correctAnswer: 1,
    explanation: 'La estrategia de mayor valor es implementar un enfoque basado en criticidad, donde los recursos limitados se asignan proporcionalmente al riesgo asociado con cada equipo. Este método asegura que los activos con mayor impacto potencial en seguridad, producción y costos reciban monitoreo más frecuente y detallado, mientras los menos críticos pueden tener un enfoque menos intensivo, optimizando así el retorno de inversión del programa.',
    weight: 1,
    image: undefined
  },
  {
    id: 82,
    question: 'Durante el monitoreo de un compresor de tornillo, observas un incremento en los niveles de vibración de alta frecuencia con modulaciones a la frecuencia de rotación. El operador reporta un ruido agudo intermitente. ¿Cuál es la acción más apropiada?',
    options: [
      'Ignorar los cambios ya que son normales en compresores de tornillo',
      'Programar una inspección inmediata del sistema de lubricación',
      'Reducir la carga del compresor al 50%',
      'Reemplazar preventivamente el compresor'
    ],
    correctAnswer: 1,
    explanation: 'El incremento en vibraciones de alta frecuencia con modulaciones a la frecuencia de rotación, acompañado de ruido agudo intermitente, es un indicador típico de problemas de lubricación en compresores de tornillo. Esta condición puede provocar contacto metal-metal entre los rotores o con la carcasa, acelerando rápidamente el daño. La inspección inmediata del sistema de lubricación (nivel, presión, filtros, calidad del aceite) es prioritaria para prevenir daños mayores.',
    weight: 1,
    image: undefined
  },
  {
    id: 83,
    question: 'Al analizar una máquina que opera a velocidad variable, notas que los niveles de vibración aumentan significativamente cuando la velocidad alcanza las 1200 RPM, pero se reducen tanto a velocidades más altas como más bajas. El supervisor pregunta si puede operar permanentemente a 1400 RPM para mantener la producción. ¿Cuál es tu recomendación?',
    options: [
      'Permitir la operación a 1400 RPM sin restricciones',
      'Recomendar una evaluación de resonancia y establecer restricciones de velocidad formales para evitar rangos críticos',
      'Detener permanentemente la máquina para reemplazo',
      'Operar únicamente a velocidad máxima'
    ],
    correctAnswer: 1,
    explanation: 'El comportamiento descrito sugiere claramente una condición de resonancia estructural alrededor de 1200 RPM, donde la frecuencia natural del sistema coincide con la frecuencia de excitación. Aunque operar a 1400 RPM temporalmente puede estar fuera de la zona de resonancia, se debe realizar una evaluación formal (pruebas de impacto, ODS) para caracterizar completamente el fenómeno y establecer rangos de velocidad prohibidos documentados en procedimientos operativos, previniendo operaciones futuras en condiciones destructivas.',
    weight: 1,
    image: undefined
  },
  {
    id: 84,
    question: 'En un análisis de vibraciones de un ventilador de extracción crítico, detectas un pico predominante a 1X RPM con amplitud de 9 mm/s RMS. Al analizar la fase, observas mediciones estables con desfase de aproximadamente 90° entre las posiciones horizontal y vertical. ¿Qué condición indica este patrón?',
    options: [
      'Desalineación',
      'Desbalance',
      'Eje doblado',
      'Fallo en rodamientos'
    ],
    correctAnswer: 1,
    explanation: 'Un pico predominante a 1X RPM con desfase de aproximadamente 90° entre mediciones horizontal y vertical indica claramente desbalance. Esta relación de fase es característica del desbalance porque representa el patrón circular (o elíptico) del movimiento del rotor cuando la fuerza centrífuga causada por el desbalance actúa durante la rotación. Este diagnóstico permite recomendar específicamente un procedimiento de balanceo dinámico como acción correctiva.',
    weight: 1,
    image: undefined
  },
  {
    id: 85,
    question: 'Durante una prueba de aceptación en fábrica (FAT) de un nuevo compresor crítico, los niveles de vibración medidos exceden ligeramente los criterios especificados en el contrato. El fabricante argumenta que el equipo cumplirá los criterios una vez instalado en su base definitiva. Como analista responsable, ¿qué decisión recomendarías?',
    options: [
      'Aceptar la explicación del fabricante sin condiciones',
      'Rechazar el equipo y solicitar uno nuevo',
      'Documentar la no conformidad y exigir una prueba de funcionamiento en sitio con garantía extendida si no se cumplen los criterios acordados',
      'Ignorar los criterios de vibración y enfocarse en otros parámetros'
    ],
    correctAnswer: 2,
    explanation: 'La mejor práctica ante esta situación es documentar formalmente la no conformidad y establecer un acuerdo que incluya pruebas de verificación en sitio con garantías extendidas. Esta estrategia protege los intereses del comprador mientras permite una resolución pragmática, reconociendo que las condiciones de base en fábrica pueden diferir de la instalación final, pero manteniendo la responsabilidad del fabricante de cumplir las especificaciones contractuales.',
    weight: 1,
    image: undefined
  },
  {
    id: 86,
    question: 'En una planta de procesamiento de alimentos, el gerente de producción solicita reducir el tiempo dedicado a mediciones de vibración porque interfieren con la producción. ¿Cuál es la mejor respuesta desde la perspectiva de un analista Categoría I?',
    options: [
      'Eliminar completamente las mediciones en equipos secundarios',
      'Proponer la instalación de sistema de monitoreo online para equipos críticos y optimizar las rutas de medición para los demás',
      'Ignorar la solicitud y mantener el programa sin cambios',
      'Transferir toda la responsabilidad al departamento de producción'
    ],
    correctAnswer: 1,
    explanation: 'La mejor respuesta combina aspectos técnicos y organizacionales proponiendo un sistema dual: monitoreo online para equipos críticos (eliminando la necesidad de acceso regular) y optimización de rutas para equipos secundarios (reduciendo el impacto en producción). Esta solución balanceada demuestra comprensión tanto de las necesidades de producción como de los requerimientos de confiabilidad, presentando una alternativa que mejora ambos aspectos en lugar de sacrificar uno por el otro.',
    weight: 1,
    image: undefined
  },
  {
    id: 91,
    question: 'En una empresa minera, el gerente de seguridad solicita integrar el análisis de vibraciones con el programa de prevención de riesgos. ¿Qué enfoque proporcionaría mayor valor desde la perspectiva de seguridad industrial?',
    options: [
      'Limitar el acceso a áreas con equipos rotatorios',
      'Incluir en el análisis de modos de falla (FMEA) los escenarios donde las fallas detectables por vibración pueden crear riesgos de seguridad',
      'Realizar todas las mediciones durante los turnos nocturnos',
      'Utilizar únicamente instrumentos con batería'
    ],
    correctAnswer: 1,
    explanation: 'Integrar el análisis de vibraciones con FMEA de seguridad permite identificar sistemáticamente los modos de falla mecánica que podrían generar riesgos para el personal (proyección de fragmentos, liberación de materiales peligrosos, incendios). Este enfoque proactivo prioriza el monitoreo de condiciones precursoras de eventos de seguridad, como desbalances severos o aflojamiento de componentes en equipos críticos, demostrando el valor del análisis de vibraciones dentro del sistema de gestión de seguridad.',
    weight: 1,
    image: undefined
  },
  {
    id: 92,
    question: 'Durante el análisis de vibraciones en una bomba de alimentación de caldera, detectas un cambio significativo en el espectro, con incremento de bandas laterales alrededor de la frecuencia de paso de álabes (BPF). Operaciones indica que no pueden parar el equipo inmediatamente. ¿Cuál es la recomendación más adecuada?',
    options: [
      'Insistir en una parada inmediata sin importar las consecuencias operativas',
      'Verificar parámetros operativos (caudal, presión, NPSH) y ajustar el punto de operación para minimizar la cavitación mientras se programa una intervención',
      'No hacer nada hasta la próxima parada programada en 6 meses',
      'Aumentar la velocidad de la bomba para mejorar su rendimiento'
    ],
    correctAnswer: 1,
    explanation: 'El incremento de bandas laterales alrededor de la BPF indica probablemente cavitación o recirculación. La recomendación óptima es verificar y ajustar los parámetros operativos para minimizar el fenómeno hidráulico sin detener el equipo, mientras se programa una intervención. Esta solución intermedia mitiga el daño progresivo y el riesgo de fallo catastrófico sin impactar inmediatamente la operación de la caldera, que podría tener severas implicaciones energéticas y económicas.',
    weight: 1,
    image: undefined
  },
  {
    id: 93,
    question: 'En una auditoría de confiabilidad, encuentras que un programa de análisis de vibraciones establecido hace años no ha prevenido fallas significativas. Al investigar, detectas que los técnicos realizan mediciones pero nadie analiza regularmente los datos. Como analista Categoría I, ¿qué recomendarías?',
    options: [
      'Comprar software más avanzado',
      'Eliminar el programa por su ineficacia',
      'Desarrollar un flujo de trabajo estructurado que incluya roles claros para medición, análisis, diagnóstico y seguimiento de acciones correctivas',
      'Duplicar la frecuencia de las mediciones actuales'
    ],
    correctAnswer: 2,
    explanation: 'La causa fundamental del problema es la falta de un proceso estructurado para convertir datos en acciones. La recomendación clave es desarrollar un flujo de trabajo completo con responsabilidades claramente definidas para cada etapa: medición, análisis, diagnóstico, recomendación, ejecución y verificación. Esta estructura organizativa asegura que los datos recolectados se traduzcan efectivamente en acciones correctivas implementadas y verificadas, cerrando el ciclo de valor del programa.',
    weight: 1,
    image: undefined
  },
  {
    id: 94,
    question: 'Durante la puesta en marcha de una nueva línea de producción, se te solicita establecer valores base y alarmas para el monitoreo de vibraciones. Al realizar mediciones iniciales, encuentras que algunos equipos ya muestran niveles superiores a los recomendados por normas ISO. ¿Cuál es la acción más apropiada?',
    options: [
      'Aceptar estos valores iniciales como la nueva línea base sin cuestionamiento',
      'Notificar a ingeniería y al proveedor, solicitando correcciones antes de la aceptación final, documentando formalmente la condición',
      'Establecer alarmas muy por encima de los valores actuales para evitar alertas frecuentes',
      'Ignorar las normas ISO por ser demasiado conservadoras'
    ],
    correctAnswer: 1,
    explanation: 'Aceptar niveles de vibración elevados en equipos nuevos compromete la confiabilidad futura de la planta y puede invalidar garantías. La acción correcta es notificar formalmente a ingeniería y al proveedor durante el periodo de garantía, solicitando correcciones para cumplir con las especificaciones contractuales y estándares aplicables. Esta postura protege los intereses a largo plazo de la organización y establece un precedente de cumplimiento con los estándares de calidad desde el inicio de operaciones.',
    weight: 1,
    image: undefined
  },
  {
    id: 95,
    question: 'En una planta química, debes configurar el analizador para monitorear un reactor agitado a baja velocidad (120 RPM) con engranaje reductor. ¿Qué configuración de adquisición es más apropiada para detectar problemas tanto en el agitador como en el reductor?',
    options: [
      'Alta frecuencia máxima (Fmax) con pocas líneas de resolución',
      'Baja frecuencia máxima con muchas líneas de resolución',
      'Múltiples configuraciones: una de baja frecuencia con alta resolución para el agitador y otra de alta frecuencia para el reductor',
      'Configuración estándar igual a la usada en bombas centrifugas'
    ],
    correctAnswer: 2,
    explanation: 'Los equipos de baja velocidad con reductores presentan un desafío único: requieren alta resolución para frecuencias bajas (movimiento del agitador y problemas estructurales) y simultáneamente capacidad para detectar frecuencias altas (engranajes, rodamientos). La solución óptima es implementar múltiples configuraciones específicas para cada componente, asegurando la detección efectiva de problemas en todo el tren de máquinas sin comprometer la resolución necesaria para análisis detallado.',
    weight: 1,
    image: undefined
  },
  {
    id: 96,
    question: 'En una evaluación de riesgos operacionales, se te solicita identificar equipos críticos para incluir en el programa de análisis de vibraciones. La planta tiene recursos limitados. ¿Qué criterio es más relevante para esta selección?',
    options: [
      'El valor de compra inicial del equipo',
      'La antigüedad del equipo',
      'El impacto operacional y el tiempo medio de reparación en caso de falla',
      'La marca del fabricante'
    ],
    correctAnswer: 2,
    explanation: 'El criterio más relevante para priorizar equipos con recursos limitados es el impacto operacional combinado con el tiempo medio de reparación. Este enfoque identifica equipos cuya falla causaría las mayores pérdidas de producción y costos asociados, especialmente aquellos con largos tiempos de reparación o reemplazo. Esta metodología basada en riesgos asegura que los recursos limitados de monitoreo se asignen donde proporcionarán el mayor retorno en términos de prevención de pérdidas.',
    weight: 1,
    image: undefined
  },
  {
    id: 97,
    question: 'Durante las mediciones de vibración en un compresor de aire, observas que los valores fluctúan significativamente con los ciclos de carga/descarga. Al presentar los resultados, el supervisor cuestiona la confiabilidad del análisis. ¿Cuál es la mejor respuesta técnica?',
    options: [
      'Reconocer que el análisis no es confiable en este tipo de equipos',
      'Explicar la necesidad de realizar mediciones en condiciones operativas consistentes, estableciendo un protocolo que especifique el estado de carga para futuras mediciones',
      'Sugerir reemplazar el equipo de medición por uno más costoso',
      'Recomendar que se evite el análisis de vibraciones en compresores'
    ],
    correctAnswer: 1,
    explanation: 'Las fluctuaciones en valores de vibración durante ciclos de carga/descarga son normales y esperables en compresores. La respuesta técnica correcta es establecer un protocolo que especifique condiciones operativas consistentes para las mediciones (por ejemplo, siempre en carga completa o siempre en descarga), permitiendo comparaciones válidas en el tiempo. Este enfoque metodológico asegura la confiabilidad del análisis de tendencias y demuestra comprensión de la influencia de las condiciones operativas en las mediciones.',
    weight: 1,
    image: undefined
  },
  {
    id: 98,
    question: 'Como parte de una iniciativa de transformación digital, se te solicita especificar los requerimientos para integrar el análisis de vibraciones con el sistema de gestión de mantenimiento (CMMS). ¿Qué capacidad proporcionaría mayor valor para la toma de decisiones?',
    options: [
      'Gráficos 3D coloridos en los informes',
      'La correlación automática de eventos de incremento de vibración con actividades de mantenimiento y cambios operacionales',
      'La capacidad de enviar informes por email',
      'Logos personalizados en los reportes'
    ],
    correctAnswer: 1,
    explanation: 'La capacidad de correlacionar automáticamente los cambios en las vibraciones con las intervenciones de mantenimiento y modificaciones operacionales proporciona contexto crítico para el análisis. Esta funcionalidad permite identificar si los cambios detectados son resultado de reparaciones previas, ajustes operativos o degradación genuina, facilitando diagnósticos más precisos y evitando tanto falsos positivos como interpretaciones erróneas en un entorno de gestión integrada de activos.',
    weight: 1,
    image: undefined
  },
  {
    id: 99,
    question: 'En una central hidroeléctrica, el análisis de vibraciones de una turbina muestra un incremento gradual en componentes subsincrónicas (menores a 1X RPM). El jefe de operaciones pregunta si puede continuar operando hasta la temporada de menor demanda. ¿Cuál es la recomendación correcta?',
    options: [
      'Continuar la operación normal sin restricciones',
      'Detener inmediatamente la unidad sin evaluación adicional',
      'Implementar monitoreo continuo, verificar presencia de inestabilidades hidráulicas y consultar con el fabricante para definir límites operativos seguros',
      'Reducir la potencia al 25% indefinidamente'
    ],
    correctAnswer: 2,
    explanation: 'Las vibraciones subsincrónicas en turbinas hidráulicas pueden indicar fenómenos como vórtices, cavitación o resonancias hidráulicas que podrían evolucionar hacia inestabilidades severas. La recomendación más adecuada combina vigilancia intensificada (monitoreo continuo) con análisis específico de fenómenos hidráulicos, consultando con el fabricante que posee datos específicos sobre comportamiento aceptable para ese diseño particular. Este enfoque permite establecer límites operativos temporales basados en evidencia técnica mientras se planifica la intervención.',
    weight: 1,
    image: undefined
  },
  {
    id: 100,
    question: 'Durante el entrenamiento de un nuevo técnico, observas que está interpretando incorrectamente la gravedad de un problema basándose solo en valores globales de vibración. ¿Cuál sería la explicación más valiosa para su desarrollo profesional?',
    options: [
      'Indicarle que solo debe seguir los procedimientos sin cuestionar',
      'Explicarle que el diagnóstico efectivo requiere analizar tanto valores globales como espectros y formas de onda, considerando el tipo de máquina, su aplicación y el contexto operativo',
      'Sugerirle que ignore los valores globales completamente',
      'Recomendarle que siempre alerte sobre cualquier incremento sin importar su magnitud'
    ],
    correctAnswer: 1,
    explanation: 'La enseñanza más valiosa para un técnico en formación es comprender que el diagnóstico efectivo integra múltiples fuentes de información (valores globales, espectros, formas de onda) en el contexto específico de cada máquina. Esta explicación desarrolla el pensamiento crítico necesario para un analista Categoría I, enfatizando que la interpretación correcta requiere considerar el tipo de equipo, su aplicación, historial y contexto operativo, no solo valores numéricos aislados.',
    weight: 1,
    image: undefined
  }
]; 