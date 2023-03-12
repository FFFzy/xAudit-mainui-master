<template>
  <NavFooter>
    <section class="contact_area section-padding" style="margin-top: 100px;background: #f7f7f7">
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          </div>
            <div class="panel-body">
              <div class="container">
                <div class="row">
                  <ArticleSearchItem
                      v-if="'articles'==='articles'"
                      :url="'/article/' + '1'"
                      :title="'Effectively Generating Vulnerable Transaction Sequences in Smart Contracts with Reinforcement Learning-guided Fuzzing'"
                      :tags=arr1
                      :introduction="'As computer programs run on top of blockchain, smart contracts have proliferated a myriad of decentralized applications while bringing security vulnerabilities, which may cause huge financial losses. Thus, it is crucial and urgent to detect the vulnerabilities of smart contracts. However, existing fuzzers for smart contracts are still inefficient to detect sophisticated vulnerabilities that require specific vulnerable transaction sequences to trigger. To address this challenge, we propose a novel vulnerability-guided fuzzer based on reinforcement learning, namely RLF, for generating vulnerable transaction sequences to detect such sophisticated vulnerabilities in smart contracts. In particular, we firstly model the process of fuzzing smart contracts as a Markov decision process to construct our reinforcement learning framework. We then creatively design an appropriate reward with consideration of both vulnerability and code coverage so that it can effectively guide our fuzzer to generate specific transaction sequences to reveal vulnerabilities, especially for the vulnerabilities related to multiple functions. We conduct extensive experiments to evaluate RLF’s performance. The experimental results demonstrate that our RLF outperforms stateof-the-art vulnerability-detection tools (e.g., detecting 8%-69% more vulnerabilities within 30 minutes).'"
                      :up-time="'[ASE 2022.10]'"
                  ></ArticleSearchItem>
                  <ArticleSearchItem
                      v-if="'articles'==='articles'"
                      :url="'/article/' + '2'"
                      :title="'Effectively Generating Vulnerable Transaction Sequences in Smart Contracts with Reinforcement Learning-guided Fuzzing'"
                      :tags=arr1
                      :introduction="'As computer programs run on top of blockchain, smart contracts have proliferated a myriad of decentralized applications while bringing security vulnerabilities, which may cause huge financial losses. Thus, it is crucial and urgent to detect the vulnerabilities of smart contracts. However, existing fuzzers for smart contracts are still inefficient to detect sophisticated vulnerabilities that require specific vulnerable transaction sequences to trigger. To address this challenge, we propose a novel vulnerability-guided fuzzer based on reinforcement learning, namely RLF, for generating vulnerable transaction sequences to detect such sophisticated vulnerabilities in smart contracts. In particular, we firstly model the process of fuzzing smart contracts as a Markov decision process to construct our reinforcement learning framework. We then creatively design an appropriate reward with consideration of both vulnerability and code coverage so that it can effectively guide our fuzzer to generate specific transaction sequences to reveal vulnerabilities, especially for the vulnerabilities related to multiple functions. We conduct extensive experiments to evaluate RLF’s performance. The experimental results demonstrate that our RLF outperforms stateof-the-art vulnerability-detection tools (e.g., detecting 8%-69% more vulnerabilities within 30 minutes).'"
                      :up-time="'[ASE 2022.10]'"
                  ></ArticleSearchItem>
                  <ArticleSearchItem
                      v-if="'articles'==='articles'"
                      :url="'/article/' + '3'"
                      :title="'Effectively Generating Vulnerable Transaction Sequences in Smart Contracts with Reinforcement Learning-guided Fuzzing'"
                      :tags=arr1
                      :introduction="'As computer programs run on top of blockchain, smart contracts have proliferated a myriad of decentralized applications while bringing security vulnerabilities, which may cause huge financial losses. Thus, it is crucial and urgent to detect the vulnerabilities of smart contracts. However, existing fuzzers for smart contracts are still inefficient to detect sophisticated vulnerabilities that require specific vulnerable transaction sequences to trigger. To address this challenge, we propose a novel vulnerability-guided fuzzer based on reinforcement learning, namely RLF, for generating vulnerable transaction sequences to detect such sophisticated vulnerabilities in smart contracts. In particular, we firstly model the process of fuzzing smart contracts as a Markov decision process to construct our reinforcement learning framework. We then creatively design an appropriate reward with consideration of both vulnerability and code coverage so that it can effectively guide our fuzzer to generate specific transaction sequences to reveal vulnerabilities, especially for the vulnerabilities related to multiple functions. We conduct extensive experiments to evaluate RLF’s performance. The experimental results demonstrate that our RLF outperforms stateof-the-art vulnerability-detection tools (e.g., detecting 8%-69% more vulnerabilities within 30 minutes).'"
                      :up-time="'[ASE 2022.10]'"
                  ></ArticleSearchItem>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  </NavFooter>
</template>

<script>

import ArticleSearchItem from "../components/items/ArticleSearchItem.vue";
import NavFooter from "../components/NavFooter.vue";


export default {
  name: "SearchPanel",
  components: {NavFooter, ArticleSearchItem},
  setup() {
    const arr1 = new Array(0);
    arr1.push("Fuzzing");
    arr1.push("Smart Contract");
    arr1.push("Reinforcement Learning");

    return {arr1}
  }
}
</script>

<style scoped>
.row-search {
  margin-bottom: 15px;
}

.btn-tag {
  margin: 3px;
}
</style>