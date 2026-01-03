import type { Note } from './types';

export const notes: Note[] = [
  {
    slug: 'what-surprised-me-about-disagreement',
    title: 'What surprised me about disagreement',
    date: '2026-01-02',
    content: [
      "I started this project expecting model disagreement to be mostly about one model being right and another being wrong. That's not what I found.",
      "The more interesting cases are when both models give plausible answers that differ in subtle ways. Often they're interpreting the question slightly differently, or they're emphasizing different aspects of a complex situation. Neither is wrong exactly, but they're not giving you the same thing.",
      "This matters because if you're using disagreement as a signal for uncertainty, the naive approach of 'if they disagree, flag it' misses all the nuance. You end up flagging cases where the disagreement is actually informative and ignoring cases where both models are confidently wrong in the same way.",
      "I've started categorizing disagreements into three rough buckets: interpretive (different valid readings), factual (one is probably wrong), and structural (they're solving different problems). The proportions vary a lot by domain. Math is mostly factual. Open-ended reasoning is mostly interpretive. And ambiguous prompts create structural disagreements.",
      "Next step is to see if I can build a classifier that sorts disagreements into these buckets automatically. If that works, the downstream metrics become much more useful.",
    ],
  },
  {
    slug: 'a-failure-mode-i-keep-seeing',
    title: 'A failure mode I keep seeing',
    date: '2026-01-05',
    content: [
      "There's a pattern I've noticed across several models and tasks. I'm calling it 'confident incompleteness' for now.",
      "The model produces a well-structured, fluent response that addresses most of what was asked. But it quietly drops one constraint or one aspect of the question. No hedging, no acknowledgment that something was left out. Just a complete-sounding answer that isn't actually complete.",
      "This is different from hallucination. The model isn't making things up. It's more like selective attention—it focuses on the parts of the task it can handle well and treats the rest as if it wasn't there.",
      "The frustrating part is that confidence scores don't help here. The model is genuinely confident in what it produced, because what it produced is correct for the narrower problem it chose to solve.",
      "I've been experimenting with a simple check: ask the model to list what constraints it satisfied. Sometimes this surfaces the gap. But not always. The model will occasionally claim to have satisfied constraints it didn't. That's a different failure mode, and I'm tracking that separately.",
      "For now, the most reliable approach seems to be explicit constraint verification as a separate step. More expensive, but catches things that internal checks miss.",
    ],
  },
  {
    slug: 'why-clean-evaluations-are-hard',
    title: 'Why clean evaluations are hard',
    date: '2026-01-12',
    content: [
      "I spent the past week trying to set up a clean evaluation for one of the reasoning tasks I'm studying. It's harder than it should be, and I think the reasons are instructive.",
      "First problem: ground truth. For tasks with clear right answers, evaluation is straightforward. But most of what I care about—reasoning quality, explanation clarity, handling of ambiguity—doesn't have clean ground truth. You can define rubrics, but then you're evaluating against your rubric, not against some objective standard.",
      "Second problem: sensitivity. Small changes to prompts, small changes to sampling parameters, small changes to the order of examples—all of these can shift results. If your evaluation isn't stable to perturbations you consider irrelevant, you're measuring the wrong thing.",
      "Third problem: leakage. It's increasingly unclear what models have seen during training. If your evaluation dataset overlaps with training data, your results don't mean what you think they mean. Creating truly held-out evaluations is getting harder as training corpora grow.",
      "I don't have solutions, just notes on what I'm trying. Multiple rubrics from different angles. Perturbation tests to check stability. Synthetic modifications to existing tasks to reduce leakage risk. None of these are perfect, but the combination helps surface problems.",
      "The meta-lesson: simple-looking evaluation numbers hide a lot of decisions. When you read a paper reporting model performance, the methodology section matters more than the numbers.",
    ],
  },
  {
    slug: 'a-small-visualization-trick',
    title: 'A small visualization trick',
    date: '2026-01-20',
    content: [
      "I've been struggling to visualize reasoning traces in a way that reveals structure without overwhelming. Text is too sequential. Tree diagrams get messy fast. What I needed was something in between.",
      "The trick I landed on: represent each reasoning step as a short horizontal bar. Stack them vertically. Use position on the x-axis to indicate rough semantic category (defined by a simple classifier). Use intensity to indicate confidence or importance.",
      "What you get is something like a barcode for each trace. Not detailed enough to read the reasoning, but enough to see patterns. Long traces with lots of jumping around look visually chaotic. Focused traces have a cleaner structure. Traces that get stuck in loops show repetition.",
      "The surprising part: once you have these barcodes, you can compare them. Two traces that look similar as text might have very different barcodes. Two traces that seem different might have the same structural signature. This became useful for clustering failure modes.",
      "I'm still iterating on the category definitions and the visual encoding. But the core idea—turning sequential traces into 2D patterns—has been productive. Sometimes the right abstraction is just about finding a representation that makes patterns visible.",
    ],
  },
  {
    slug: 'diffthinker-visual-reasoning-paradigm',
    title: 'DiffThinker: When reasoning happens in pixels',
    date: '2026-01-03',
    content: [
      "A paper caught my attention this week: DiffThinker, which reframes visual reasoning as an image-to-image task rather than the standard text-based chain-of-thought approach. The core insight is deceptively simple—if the problem is visual, maybe the reasoning should be too.",
      {
        type: 'image',
        src: '/images/diffthinker-infographic.png',
        alt: 'DiffThinker paradigm comparison showing text-centric reasoning versus generative visual reasoning',
        caption: 'DiffThinker shifts reasoning from symbolic text space to visual space, achieving significant performance gains on vision-centric tasks.',
      },
      "Current MLLMs handle visual puzzles by converting them to text, reasoning through chain-of-thought, and outputting symbolic plans. This works reasonably well for many tasks, but it struggles with problems where spatial relationships matter—mazes, path planning, geometric reasoning. The text bottleneck loses information that was obvious in the original image.",
      "DiffThinker inverts this. Instead of image→text→reasoning→text, it does image→reasoning→image. For a maze, rather than producing directions like 'D,L,D,D,R,R,R...', it generates an image with the solution path drawn directly. The diffusion model handles the visual reasoning natively.",
      "The reported numbers are striking: 314% improvement over GPT-5 on vision-centric tasks. But what interests me more than the benchmark numbers are the architectural properties. Fixed inference time (1.1s regardless of problem complexity). Native parallelism—exploring multiple solution paths simultaneously. And the ability to generate visual candidates that other models can verify.",
      "This connects directly to something I've been thinking about for reasoning software: the gap between how we represent problems internally and how models process them. Text is a lossy compression of spatial information. If your reasoning trace has to go through that bottleneck, you're fighting the representation.",
      "The robotics implications are what really got me interested. Real-time motor planning and locomotion are fundamentally visual-spatial problems. A robot navigating an environment, planning arm trajectories, or coordinating multi-joint movements—these are domains where text-based reasoning traces seem like the wrong abstraction from the start.",
      "Current approaches to robot planning often involve converting visual input to symbolic representations, reasoning in that space, then converting back to motor commands. Each conversion is a potential failure point. What if the reasoning happened in a representation that was already spatially grounded?",
      "I'm not suggesting DiffThinker is ready for real-time robotics—the 1.1s inference time is far too slow for reactive control. But the paradigm shift matters. If visual reasoning can happen natively in visual space, the same principle might apply to other domains where we've been forcing problems through text-shaped holes.",
      "The 'controllable' property they highlight—fixed, predictable computation time—is particularly relevant for robotics. Variable-length chain-of-thought is a nightmare for systems with hard real-time constraints. You can't have your robot's planner suddenly decide to 'think longer' about a tricky situation when there's a wall approaching.",
      "Worth watching where this goes. The core insight—match your reasoning representation to your problem representation—seems like it should generalize beyond mazes.",
    ],
    externalLink: {
      url: 'https://arxiv.org/abs/2512.24165',
      label: 'Read the paper on arXiv',
    },
  },
];

export function getNoteBySlug(slug: string): Note | undefined {
  return notes.find((n) => n.slug === slug);
}
