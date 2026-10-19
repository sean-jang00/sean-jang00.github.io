---
title: r/artificiallife에서 본 인공생명 구현 사례들
subtitle: 2023년 이후 개인 개발자들이 공유한 시뮬레이션, 게임, 엔진을 갈래별로 모았다
date: 2026-10-20 09:00:00
toc: true
categories:
  - 동향
tags:
  - 인공생명
  - 개방형 진화
  - 게임
  - 시뮬레이션
  - 신경진화
  - 세포 자동자
---

r/artificiallife는 인공생명(artificial life)을 주제로 한 Reddit 커뮤니티다. 이 커뮤니티의 Atom 피드에서 볼 수 있는 글을 모아 보니 71개였고, 그중 2023년 이후 글에는 개인이 만든 시뮬레이션과 게임을 공유하는 글이 많았다. 이 글은 그 가운데 구현 내용이 글이나 공개 페이지에 적혀 있는 사례를 갈래별로 소개한다.

<!-- more -->

## 들어가며

Reddit은 일반 페이지 요청을 자동으로 받지 않지만 커뮤니티의 Atom 피드는 열려 있다. 역대 상위, 올해, 이달, 최근, 인기 피드 다섯 개를 합치면 서로 다른 글이 71개였다. 최근 피드에 100개를 요청해도 71개가 돌아와서, 피드로 볼 수 있는 글은 이것이 전부로 보인다. 다만 피드에 실리는 글이 커뮤니티의 모든 글은 아니므로, 아래 연도별 수는 피드에 남은 글의 분포다.

| 연도 | 글 수 |
|---|---|
| 2015–2017 | 11 |
| 2019–2022 | 12 |
| 2023 | 10 |
| 2024 | 16 |
| 2025 | 9 |
| 2026 | 13 |

2023년부터 2026년까지 48개, 2015년부터 2022년까지 23개다(2018년 글은 없다). 이 가운데 2023년 이후의 구현·프로젝트 글을 골랐고, 질문, 뉴스, 주제에서 벗어난 글은 뺐다. 영상만 있거나 본문이 없는 글은 내용을 확인할 수 없어 대부분 다루지 않았다. 예외는 EvoLife와 Ribossome으로, 본문은 없지만 글 제목에 구현 설명이 들어 있어 제목을 근거로 소개했다. Neural Aquarium, Feryl, Fishtank Emergence Lab, NodeSpawn은 프로젝트 페이지도 직접 읽어 설명을 보탰다.

각 사례의 설명은 Reddit 글의 제목과 본문(피드에 실린 부분)과 프로젝트의 공개 페이지에 적힌 내용만 옮겼다. 직접 실행해 보거나 코드를 검토하지는 않았다. 적혀 있지 않은 것은 적혀 있지 않다고 썼다.

## 1. 신경망 개체의 생태계

여러 개체가 한 세계에 살면서 먹이를 찾고 번식하는 시뮬레이션이다. 개체의 행동을 작은 신경망이 정하는 경우가 많다.

### Neural Aquarium

![Neural Aquarium 화면](neuralaquarium.jpg)

*화면: https://github.com/CircuitGhost/neuralaquarium, 2026-10-19 캡처*

Three.js로 만든 브라우저 수조 시뮬레이션이다(Reddit 글 "Built an in-browser artificial life simulation…", 2026-10-18). 개체마다 연속 시간 순환 신경망(continuous-time recurrent neural network, CTRNN)이 있고, 감각 입력 8개, 은닉 뉴런 4개, 운동 출력 4개로 되어 있다. 배고픔과 먹이 감지 같은 입력에 따라 움직인다. Reddit 글에는 선택 방식이 적혀 있지 않다. GitHub README의 첫 문단에는 개체가 "swim, hunt drifting plankton, age through distinct life stages, and reproduce with mutation"한다고, 즉 생애 단계를 거치고 돌연변이를 동반해 번식한다고 적혀 있지만, 선택 방식의 세부는 없다. 코드는 [GitHub](https://github.com/CircuitGhost/neuralaquarium)에 MIT 라이선스로 공개되어 있다. [Reddit 글](https://www.reddit.com/r/artificiallife/comments/1x97bhs/)

### Fishtank Emergence Lab

![Fishtank Emergence Lab 화면](fishtank.jpg)

*화면: https://josephbartlett.github.io/sim-emergent-fish/, 2026-10-19 캡처*

브라우저에서 도는 수조 생태계다. 화면 제목은 "AUTONOMOUS ECOLOGY OBSERVATORY"이다. 풀을 뜯는 개체, 무리를 짓는 개체, 기회주의자, 사냥꾼 같은 유형이 있고, 먹이의 흐름, 먹이가 많아지고 줄어드는 계절 주기(bloom·lean), 선반·수초·물살 같은 지형이 있다. 개체의 제어 방식은 페이지에 "local rules", "current intent"라고만 적혀 있다. 제작자는 Reddit 글(2026-03-25)에서 "behavior emerges from simple rules (movement, food, currents, roles like "hunter," etc.)"라고 설명했다. 신경망이 쓰인다는 언급은 페이지와 글 어디에도 없다. 개체는 에너지가 문턱을 넘으면 분열해 번식하고(fertility 값이 문턱을 낮춘다), 화면에 출생·사망, 세대, 계통(lineage)이 표시된다. 적합도(fitness)나 유전 방식은 적혀 있지 않다.

관찰 도구가 많다. 계통 강조와 궤적 표시, 먹이 지도, 개체 수 기록 그래프, 시나리오 5개, 시드 불러오기, 15초·30초 되감기, 책갈피가 있다. [공개 페이지](https://josephbartlett.github.io/sim-emergent-fish/), [Reddit 글](https://www.reddit.com/r/artificiallife/comments/1s3q9km/)

### evolving-social-intelligence

![evolving-social-intelligence 저장소 화면](evolving-social-intelligence.jpg)

*화면: https://github.com/jabbarman/evolving-social-intelligence, 2026-10-19 캡처*

사회적 뇌 가설(social brain hypothesis)을 디지털 환경에서 재현해 보려는 오픈소스 샌드박스다(Reddit 글 2025-10-28). Reddit 글을 올릴 당시에는 신경망(52→32→6)을 가진 개체 200마리가 100×100 격자에서 먹이 자원을 두고 살았다. 지금 README는 이 구조를 legacy로 적고, social 구조(76→48→23)를 함께 적고 있다. 학습 데이터 없이 돌연변이(mutation), 선택, 번식만으로 진화시키고, 10⁶스텝을 돌린 결과를 Medium 글로 정리했다고 한다. 제작자는 이 프로젝트를 주말 실험이라고 소개했다. 코드는 MIT 라이선스다. [GitHub](https://github.com/jabbarman/evolving-social-intelligence)

### Graph of Life

![Graph of Life 브라우저 데모 화면](graph-of-life-demo.jpg)

*화면: https://graphoflife.github.io/GraphOfLife/, 2026-10-19 캡처*

게임 이론과 그래프 이론에 기반한 진화 알고리즘으로, 글을 올린 2024년 3월 기준 3년째 진행 중인 프로젝트라고 한다(Reddit 글 2024-03-28). 그래프의 노드 하나하나가 각자 신경망을 가진 개체이고, 이웃을 보고 공격하거나 방어하며 부족한 자원을 놓고 경쟁한다. 선택은 자연 선택(natural selection) 방식이고, 그래프가 스스로 조직된다고 소개한다. [저장소](https://github.com/graphoflife/GraphOfLife), [브라우저 데모](https://graphoflife.github.io/GraphOfLife/)

## 2. 몸과 제어기를 함께 진화시키는 물리 생물

관절과 근육으로 이루어진 몸을 물리 엔진 안에서 움직이게 하고, 몸의 형태와 움직임을 함께 진화시키는 갈래다.

### LIT Creature Forge

![LIT Creature Forge 상점 페이지 화면](lit-creature-forge.jpg)

*화면: https://store.steampowered.com/app/4701600/LIT_Creature_Forge/, 2026-10-19 캡처*

Steam에서 파는 Windows용 샌드박스다(Reddit 글 2026-10-18). 개발과 배급은 Lunder IT이고, 2026-05-19에 출시되었으며, 물리 엔진으로 MuJoCo를 쓴다. Karl Sims의 가상 생물 연구([Evolving Virtual Creatures](https://www.karlsims.com/papers/siggraph94.pdf), SIGGRAPH '94)에서 영감을 받았다고 밝힌다. 무작위로 만든 분절 몸과 제어기에서 시작해, 개체를 평가한 뒤 잘한 개체가 번식하고, 돌연변이와 교차(crossover)로 몸과 움직임이 함께 바뀐다. 과제 점수로 개체를 고르는 적합도 평가 방식이다. v1.1에서 수영하는 개체와 개체끼리의 경쟁이 추가되었다. Steam에서 판매 중이며 가격은 지역마다 다르다. [Steam](https://store.steampowered.com/app/4701600/LIT_Creature_Forge/)

### Solemn Sandbox

![Solemn Sandbox 화면](solemn-sandbox.jpg)

*화면: https://solemn-sandbox.vercel.app/, 2026-10-19 캡처*

브라우저에서 도는 2D 물리 생물 진화 샌드박스다(Reddit 글 2026-08-10). 사용자가 관절, 뼈, 근육으로 몸을 만들고 과제를 주면, 신경망 제어기가 유전 알고리즘(genetic algorithm)으로 진화한다. 역시 적합도 평가 방식이다. 제작자는 "Evolution by Keiwan"에서 영감을 받았다고 밝힌다. 브라우저에서 바로 열린다. [공개 페이지](https://solemn-sandbox.vercel.app/)

### NodeSpawn

![NodeSpawn 페이지 화면](nodespawn.jpg)

*화면: https://triple-donut-games.itch.io/nodespawn, 2026-10-19 캡처*

TRIPLE DONUT GAMES가 itch.io에 올린 Windows용 샌드박스로, 페이지에는 "artificial-life sandbox where creatures evolve through generations"라고 소개되어 있다. 몸, 움직임, 물려받은 형질, 사회적 행동이 개체의 생존을 정하고, 번식할 때 형질이 유전되며 돌연변이로 새로운 몸 형태, 움직임, 행동이 나온다. 페이지에는 "You don't directly control evolution"이라고 적혀 있고, 개체는 먹이를 찾고 다른 개체와 상호작용한다. 위의 두 사례와 달리 과제 점수가 아니라 생존과 번식으로 고르는 것으로 읽히지만, 선택 방식의 세부는 적혀 있지 않다. 제어 방식(신경망 여부)도 적혀 있지 않다. 본 시뮬레이션에 들어가기 전에 "Race Mode"라는 사전 시뮬레이션에서 움직이는 법을 배운다고 한다.

환경 편집, 최대 200% 시간 배속, DNA 복사와 저장, 사용자가 개체 하나를 직접 조종해 보는 기능, 개체의 신체·형질·성격(personalities)·행동을 들여다보는 기능이 있다. 생물 편집기와 진화 계통수는 예정 기능으로 적혀 있다. 컴퓨트 셰이더(compute shader)가 필요하고 권장 사양은 RTX 3060급이다. 데모는 가격을 사용자가 정하는 방식(무료도 가능)이고, 정식판은 4.99달러부터이며 Unity로 만들었다. 정식판 페이지의 표시로 보면 2026년 10월 중순에 출시되었다. 개발자는 Reddit 글(2026-05-12)에서 물리와 생태계를 한 번에 시뮬레이션한다고 소개했다. [데모](https://triple-donut-games.itch.io/nodespawndemo), [정식판](https://triple-donut-games.itch.io/nodespawn)

## 3. 세포와 다세포

세포 수준에서 시작해 다세포 생물이 나오는 과정을 보려는 갈래다. 세 사례 모두 Reddit 글로만 확인했다.

### EvoLife (blob_evol_sim)

같은 개발자가 2023년 2월부터 2025년 5월까지 다섯 번 글을 올렸고, 피드에서 본 범위에서는 이 커뮤니티에 가장 꾸준히 올라오는 프로젝트다. 다섯 글 모두 본문이 없어서, 아래 설명은 글 제목에 적힌 것이다. 제작자는 "10년 된 개인 프로젝트"이며 다세포성(multicellularity)을 꾸준히 만들어 낸다고 소개한다. 세포 수준의 물리와 기초적인 화학으로 단세포에서 첫 다세포 생물이 진화하게 하고, 실시간으로 세포 10만 개, 누적 돌연변이 약 1,300만 번, 종 4만 개를 다룬다고 적었다. 종 4만 개에 대해서는 제목에 "mostly micro-species the evolutionary algorithm is just trying out, with 1-3 alive cells"라는 단서가 붙어 있다. v0.6에서 다세포 관련 업데이트가 있었고, "Abyssal Genesis"라는 영상도 올렸다. 플랫폼과 가격은 확인한 글에 적혀 있지 않다. [Reddit 글](https://www.reddit.com/r/artificiallife/comments/1hcq33f/)

### Bio-Spheres

3D 물리 기반 시뮬레이션으로, 단세포에서 다세포로 진화하는 과정을 다룬다(Reddit 글 2025-08-04). 세포가 움직이고, 분열하고, 분화해 조직을 이룬다. 선택은 적합도 점수가 아니라 생존과 번식으로 이루어진다. 오픈소스이고 무료로 낼 예정이라고 적혀 있다. [Reddit 글](https://www.reddit.com/r/artificiallife/comments/1mh604v/)

### Ribossome

글 제목은 "GPU-accelerated artificial life where body is the genome"이다(Reddit 글 2026-01-08). 본문이 없어서 제목 외의 내용은 확인하지 못했다. [Reddit 글](https://www.reddit.com/r/artificiallife/comments/1q7c3t0/)

## 4. 연구에 가까운 엔진과 모델

### Evochora

![Evochora 화면](evochora.jpg)

*화면: http://evochora.org, 2026-10-19 캡처*

n차원 공간에서 도는 체화된(embodied) 인공생명 엔진이고 오픈소스다(Reddit 글 2025-12-09). Tierra와 Avida를 넘어 개방형 진화(open-ended evolution, OEE)를 목표로 한다고 밝힌다. 내세운 가설은 두 가지다. 보상이나 목표 없이 엄격한 열역학 규칙(에너지와 엔트로피)만으로 개체군이 안정되는 문제를 풀 수 있는가, 그리고 다세포성 같은 주요 전이(major transitions)를 이룰 수 있는가. 어셈블리 언어 명세와 과학 개요 문서가 공개되어 있다. [홈페이지](https://evochora.org), [GitHub](https://github.com/evochora/evochora)

### Araudia

![Araudia 블로그 화면](araudia.jpg)

*화면: https://www.shirt-ediss.me/blog/araudia/, 2026-10-19 캡처*

원세포(protocell)가 최초의 행위자(agent)로 발달해 간 과정을 보려는 연구 모델이다(Reddit 글 2025-11-05). 영양분이 들어오고 씻겨 나가는 흐름 반응기(flow reactor) 안에서 원세포가 살고 진화한다. 연구자의 블로그에 설명이 실려 있다. [블로그 글](https://www.shirt-ediss.me/blog/araudia/)

## 5. 진화가 아닌 디지털 생물

개체군의 진화가 아니라 한 개체가 살아 있는 동안 배우고 반응하는 것을 보여 주는 사례다.

### Feryl

![Feryl 페이지 화면](feryl.jpg)

*화면: https://double-star-games.itch.io/feryl, 2026-10-19 캡처*

Double Star Games가 만든 데스크톱 펫 형태의 "experimental digital life simulation"이다. 유리 테라리움 안에 생물 한 마리와 벌레들이 있다. 페이지는 생물을 "not animated or scripted"이고 "continuous simulation"이며 "repeating breath cycle"이 있다고 소개한다. 신경망의 종류는 페이지에 적혀 있지 않다. 진화나 개체군에 대한 언급은 없고, 대신 틱택토를 한 판 할 때마다 강화학습(reinforcement learning)으로 실력을 높이고, 마이크로폰으로 들은 목소리의 모음과 리듬에 적응한다. 개체는 시드에서 생성된다. 개발자는 Reddit 글(2026-02-21)에서 "The AI for Feryl is tiny and all integer. We could run hundreds on them on CPU in a game client."라고 적었다. Windows와 Linux용이고 Steam과 Google Play에도 있으며, itch.io에서는 4.99달러부터다. 확인한 버전은 v1.3.0(2026-03-07)이다. [itch.io](https://double-star-games.itch.io/feryl)

### Dosidicus electronicus

![Dosidicus 저장소 화면](dosidicus.jpg)

*화면: https://github.com/ViciousSquid/Dosidicus, 2026-10-19 캡처*

신경망이 생각하는 과정을 화면으로 볼 수 있는 디지털 펫 오징어다(Reddit 글 2026-03-05). 헤브 학습(Hebbian learning)으로 배우고 새 구조를 키워 가는 작은 신경 엔진이 들어 있다. 교육용 도구이자 시뮬레이션 게임으로 소개되며, 일본 IT 매체 Gigazine에 기사가 실렸다. 코드는 GitHub에 공개되어 있다. [GitHub](https://github.com/ViciousSquid/Dosidicus)

## 6. 세포 자동자 쪽

세포 자동자(cellular automaton)는 격자 위의 칸들이 이웃 칸의 상태에 따라 정해진 규칙으로 바뀌는 모형이다. Conway의 Game of Life가 대표적이다.

### WebGPU Cellular Automata Simulator

WebGPU로 만든 브라우저 세포 자동자 시뮬레이터다(Reddit 글 2025-12-07). Reddit 글에는 본문이 없어서, 지원하는 규칙의 종류 등은 이 글에서 확인하지 못했다. [공개 페이지](https://neovand.github.io/games-of-life/)

### cubicLife

![cubicLife 저장소 화면](cubiclife.jpg)

*화면: https://github.com/ms0g/cubicLife, 2026-10-19 캡처*

텍스처를 입힌 세포가 무한한 3D 세계에 놓이는 3D Game of Life 계열 프로젝트다(Reddit 글 2024-04-22). 코드는 GitHub에 공개되어 있다. [GitHub](https://github.com/ms0g/cubicLife)

## 마치며

사례를 모아 보며 눈에 띈 점을 적는다. 사례 수가 적고 대부분 소개 글과 공개 페이지만 읽은 것이어서, 커뮤니티 전체의 경향이라고 말할 근거는 되지 못한다.

- **고르는 방식이 두 가지로 나뉜다.** LIT Creature Forge와 Solemn Sandbox는 과제를 주고 점수로 개체를 고르는 적합도 평가 방식이다. Bio-Spheres, evolving-social-intelligence, Graph of Life는 점수 없이 한 세계 안에서 살아남고 번식한 개체가 남는 방식으로 소개된다. Fishtank Emergence Lab은 에너지 문턱을 넘으면 분열해 번식한다는 것만 적혀 있다. NodeSpawn은 몸의 진화를 다루면서도 페이지에 "You don't directly control evolution"이라고 적어 뒤쪽에 가깝게 소개한다.
- **관찰·시각화 기능을 내세우는 사례가 많다.** Fishtank Emergence Lab의 계통 표시, 되감기, 먹이 지도, NodeSpawn의 개체 들여다보기, Dosidicus의 신경망 표시처럼, 진화나 학습이 일어나는 과정을 보여 주는 기능을 소개 글과 페이지에서 앞세운다.
- **개인 개발자의 오래된 프로젝트가 있다.** EvoLife는 제작자가 10년 된 개인 프로젝트라고 소개하고, Graph of Life는 3년째라고 밝혔다. 피드에서 본 범위에서 같은 개발자가 여러 해에 걸쳐 진행 상황을 올린 사례는 EvoLife 하나다.

## 이 글의 이미지와 출처

이 글의 화면 이미지는 모두 각 프로젝트의 공개 페이지를 2026-10-19에 직접 캡처한 것이다. 저작권은 각 제작자에게 있으며, 프로젝트를 소개할 목적으로 인용했다. 각 이미지 아래에 캡처한 페이지의 주소를 적었다.

이 글에서 링크한 r/artificiallife 글은 다음과 같다. 나머지 사례의 Reddit 글은 본문에 날짜로 표시했고, 링크는 프로젝트 페이지로 대신했다.

- Neural Aquarium: https://www.reddit.com/r/artificiallife/comments/1x97bhs/
- Fishtank Emergence Lab: https://www.reddit.com/r/artificiallife/comments/1s3q9km/
- EvoLife: https://www.reddit.com/r/artificiallife/comments/1hcq33f/
- Bio-Spheres: https://www.reddit.com/r/artificiallife/comments/1mh604v/
- Ribossome: https://www.reddit.com/r/artificiallife/comments/1q7c3t0/
