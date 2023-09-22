import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div class="w-full rounded">
        <form class="space-y-4">
          <div>
            <label for="what" class="text-sm">
              What the command does:
            </label>
            <input
              type="text"
              name="what"
              placeholder="Show all failed pods in all namespaces"
              class="w-full rounded"
            />
          </div>

          <div>
            <label for="how" class="text-sm">
              Command:
            </label>
            <input
              type="text"
              name="how"
              placeholder="kubectl get pods --all-namespaces --field-selector=status.phase=Failed"
              class="w-full rounded font-mono"
            />
          </div>

          <div>
            <label for="output" class="text-sm">
              Output:
            </label>
            <textarea
              name="output"
              rows={placeholderOutput.split("\n").length}
              placeholder={placeholderOutput}
              class="w-full rounded font-mono"
            ></textarea>
          </div>

          <div>
            <label for="details" class="text-sm">
              Details:
            </label>
            <textarea
              name="details"
              rows={placeholderDetails.split("\n").length}
              placeholder={placeholderDetails}
              class="w-full rounded font-mono"
            ></textarea>
          </div>

          <div>
            <button type="submit" class="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Knowlem",
  meta: [
    {
      name: "description",
      content: "Knowlem is your CLI commands knowledge engine",
    },
  ],
};

const placeholderDetails = `1. \`kubectl\`: This is the command-line interface (CLI) tool for interacting with a Kubernetes cluster.
2. \`get\`: This subcommand is used to fetch and display one or more resources. In this case, the resource type is \`pods\`.
3. \`pods\`: Specifies the type of resource you want to get. Pods are the smallest deployable units in Kubernetes that can be created and managed.
4. \`--all-namespaces\`: This flag is used to list resources from all namespaces in the cluster. Without this flag, only resources in the \`default\` namespace or the one specified with the \`-n\` or \`--namespace\` flag would be displayed.
5. \`--field-selector\`: This flag allows you to select resources based on the values of their fields. In this command, we're filtering pods based on the \`status.phase\` field. 
6. \`status.phase=Failed\`: This selects pods that have completed their execution but failed for some reason.`;
const placeholderOutput = `NAMESPACE     NAME                READY   STATUS      RESTARTS   AGE
namespace-1   job-12345-1-xxxxx   0/1     Error       0          39h
namespace-1   job-12345-2-yyyyy   0/1     OOMKilled   1          28h
namespace-2   job-67890-1-zzzzz   0/1     Error       2          20h`;
