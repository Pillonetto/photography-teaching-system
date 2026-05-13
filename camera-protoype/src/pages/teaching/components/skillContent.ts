import type { TargetSkill } from '../../../types'
import type { AppLocale } from '../../../i18n'

export interface SkillLevelInfo {
  /** Short title for this stage (e.g. "Awareness", "Mastery") */
  title: string
  /** What the photographer can newly do at this level — the gain over the previous one. */
  gain: string
}

export interface SkillContent {
  /** One-line description of what this skill is about. */
  blurb: string
  /** Five level descriptions (index 0 = level 1). */
  levels: [SkillLevelInfo, SkillLevelInfo, SkillLevelInfo, SkillLevelInfo, SkillLevelInfo]
}

const SKILL_CONTENT_BY_LOCALE: Record<AppLocale, Record<TargetSkill, SkillContent>> = {
  'en-GB': {
    composition: {
      blurb: 'Where things sit in the frame and how the eye moves through it.',
      levels: [
        { title: 'Awareness', gain: 'You notice where things sit in the frame and avoid centering everything by default.' },
        { title: 'Rule of thirds', gain: 'You place subjects off-center on purpose, giving photos stronger structure.' },
        { title: 'Leading the eye', gain: 'You use lines, shapes, and negative space to guide attention where you want it.' },
        { title: 'Visual rhythm', gain: 'You balance multiple elements so every part of the frame contributes to the story.' },
        { title: 'Effortless framing', gain: 'You break compositional rules with intent - viewers instantly read what matters.' },
      ],
    },
    lighting: {
      blurb: 'Reading light and using it to shape mood, depth, and dimension.',
      levels: [
        { title: 'Seeing light', gain: 'You spot when light is too harsh, too flat, or too dim for the shot you want.' },
        { title: 'Finding soft light', gain: 'You position subjects toward windows, shade, or even sources for flattering results.' },
        { title: 'Shaping with shadow', gain: 'You direct light and shadow intentionally to add depth and dimension.' },
        { title: 'Reading mixed light', gain: 'You handle complex lighting and bend it to set the mood you want.' },
        { title: 'Lighting design', gain: 'You can turn almost any environment into something cinematic.' },
      ],
    },
    subject_clarity: {
      blurb: 'Making sure your subject is unmistakable in every frame.',
      levels: [
        { title: 'In focus', gain: 'Your subject is sharp, visible, and clearly the point of the photo.' },
        { title: 'Separation', gain: 'You make the subject stand out from busy backgrounds.' },
        { title: 'Drawing the eye', gain: 'You direct attention with focus, scale, and contrast.' },
        { title: 'Reads instantly', gain: 'Your subject is unmistakable, even in complex scenes.' },
        { title: 'Total command', gain: 'Every element in the frame supports the subject - nothing competes.' },
      ],
    },
    pose_expression: {
      blurb: 'Helping people look natural, confident, and like themselves.',
      levels: [
        { title: 'Comfortable subjects', gain: 'People look relaxed and engaged, not stiff or distracted.' },
        { title: 'Simple direction', gain: 'You give light cues so poses feel natural rather than posed.' },
        { title: 'Authentic moments', gain: 'You catch real expressions and small in-between gestures.' },
        { title: 'Storytelling pose', gain: 'You shape posture, hands, and gaze with intention.' },
        { title: 'Directing presence', gain: 'You bring out personality in any subject, in any setting.' },
      ],
    },
    background_control: {
      blurb: 'Controlling everything behind the subject so the frame stays clean.',
      levels: [
        { title: 'Spotting clutter', gain: 'You notice obvious distractions behind your subject before pressing the shutter.' },
        { title: 'Cleaning the frame', gain: 'You shift angle, distance, or depth to remove visual noise.' },
        { title: 'Complementary backdrops', gain: 'You actively choose backgrounds that support the subject.' },
        { title: 'Tonal balance', gain: 'You use color, texture, and depth in the background to set mood.' },
        { title: 'Backgrounds that speak', gain: 'The background carries meaning - it adds to the story, not just space.' },
      ],
    },
  },
  'pt-BR': {
    composition: {
      blurb: 'Onde os elementos ficam no quadro e como o olhar percorre a imagem.',
      levels: [
        { title: 'Percepção', gain: 'Você percebe onde os elementos ficam no quadro e evita centralizar tudo por padrão.' },
        { title: 'Regra dos terços', gain: 'Você posiciona o assunto fora do centro de propósito, dando mais estrutura à foto.' },
        { title: 'Guiar o olhar', gain: 'Você usa linhas, formas e espaço negativo para conduzir a atenção.' },
        { title: 'Ritmo visual', gain: 'Você equilibra vários elementos para que cada parte do quadro conte a história.' },
        { title: 'Enquadramento natural', gain: 'Você quebra regras de composição com intenção e deixa claro o que importa.' },
      ],
    },
    lighting: {
      blurb: 'Ler a luz e usá-la para criar clima, profundidade e dimensão.',
      levels: [
        { title: 'Ver a luz', gain: 'Você identifica quando a luz está dura, plana ou fraca para a foto que quer fazer.' },
        { title: 'Encontrar luz suave', gain: 'Você posiciona o assunto perto de janelas, sombra ou fontes estáveis para valorizar o retrato.' },
        { title: 'Modelar com sombra', gain: 'Você usa luz e sombra de forma intencional para dar profundidade.' },
        { title: 'Luz mista', gain: 'Você lida com cenários de luz complexos e ajusta o clima da imagem.' },
        { title: 'Desenho de luz', gain: 'Você transforma quase qualquer ambiente em uma cena cinematográfica.' },
      ],
    },
    subject_clarity: {
      blurb: 'Garantir que o assunto principal fique claro em todo enquadramento.',
      levels: [
        { title: 'Em foco', gain: 'Seu assunto está nítido, visível e claramente no centro da foto.' },
        { title: 'Separação', gain: 'Você destaca o assunto mesmo com fundos poluídos.' },
        { title: 'Direção do olhar', gain: 'Você guia a atenção com foco, escala e contraste.' },
        { title: 'Leitura imediata', gain: 'Seu assunto fica evidente mesmo em cenas complexas.' },
        { title: 'Controle total', gain: 'Cada elemento do quadro apoia o assunto e nada compete com ele.' },
      ],
    },
    pose_expression: {
      blurb: 'Ajudar pessoas a parecer naturais, confiantes e autênticas.',
      levels: [
        { title: 'Assunto confortável', gain: 'As pessoas aparecem relaxadas e conectadas, sem rigidez.' },
        { title: 'Direção simples', gain: 'Você oferece orientações leves para poses mais naturais.' },
        { title: 'Momentos reais', gain: 'Você captura expressões autênticas e gestos espontâneos.' },
        { title: 'Pose narrativa', gain: 'Você orienta postura, mãos e olhar com intenção.' },
        { title: 'Presença dirigida', gain: 'Você revela personalidade em qualquer pessoa, em qualquer cenário.' },
      ],
    },
    background_control: {
      blurb: 'Controlar o fundo para manter a imagem limpa e direcionada.',
      levels: [
        { title: 'Notar distrações', gain: 'Você identifica distrações no fundo antes de clicar.' },
        { title: 'Limpar o quadro', gain: 'Você muda ângulo, distância ou profundidade para remover ruído visual.' },
        { title: 'Fundos complementares', gain: 'Você escolhe fundos que reforçam o assunto principal.' },
        { title: 'Equilíbrio tonal', gain: 'Você usa cor, textura e profundidade do fundo para definir o clima.' },
        { title: 'Fundos com sentido', gain: 'O fundo adiciona significado à história, em vez de apenas ocupar espaço.' },
      ],
    },
  },
}

export const SKILL_CONTENT: Record<TargetSkill, SkillContent> = SKILL_CONTENT_BY_LOCALE['en-GB']

export function getSkillContent(locale: AppLocale): Record<TargetSkill, SkillContent> {
  return SKILL_CONTENT_BY_LOCALE[locale]
}

/**
 * A single short sentence describing the photographer's current learning state in this skill.
 * Returns a different message at level 0 (not started) and level 5 (mastered).
 */
export function describeCurrentState(skill: TargetSkill, level: number, locale: AppLocale = 'en-GB'): string {
  const skillContent = SKILL_CONTENT_BY_LOCALE[locale][skill]
  if (level <= 0) {
    return locale === 'pt-BR'
      ? `Ainda não começou. Vamos iniciar com: ${skillContent.levels[0].gain}`
      : `Not started yet. We'll begin with: ${skillContent.levels[0].gain}`
  }
  if (level >= 5) {
    return locale === 'pt-BR'
      ? `Você dominou essa habilidade - ${skillContent.levels[4].gain.toLowerCase()}`
      : `You've mastered this skill - ${skillContent.levels[4].gain.toLowerCase()}`
  }
  return skillContent.levels[level - 1].gain
}

/**
 * Short hint about what the next level will unlock. Empty string if already at max.
 */
export function describeNextStep(skill: TargetSkill, level: number, locale: AppLocale = 'en-GB'): string {
  if (level >= 5) return ''
  const next = SKILL_CONTENT_BY_LOCALE[locale][skill].levels[Math.max(0, level)]
  return locale === 'pt-BR'
    ? `Próximo - ${next.title}: ${next.gain}`
    : `Up next - ${next.title}: ${next.gain}`
}
