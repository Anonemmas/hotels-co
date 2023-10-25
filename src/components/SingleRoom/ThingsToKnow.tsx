/* eslint-disable max-nested-callbacks */
import { Skeleton, Stack } from "@chakra-ui/react";

import { SingleRoomCommon } from "./Types";

export default function ThingsToKnow({ isLoading, room }: SingleRoomCommon) {
  return (
    <>
      {isLoading ? (
        <section className="px-4 lg:px-0">
          <Skeleton className="h-3 w-2/6" borderRadius={20} marginBottom={4} />
          <div className="flex flex-col gap-6">
            {[...new Array(2)].map((_, index) => (
              <Stack key={index}>
                <Skeleton className="h-2 w-2/5" borderRadius={20} />
                <Skeleton className="h-2 w-2/6" borderRadius={20} />
                <Skeleton className="h-2 w-2/12" borderRadius={20} />
              </Stack>
            ))}
          </div>
        </section>
      ) : (
        <section className="px-4 lg:px-0">
          <h1 className="mb-4 text-2xl font-semibold">Things to know</h1>
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3">
            {room?.thingsToKnow.map((ruleObject: any, index: number) => (
              <div key={index} className="mt-2 flex flex-col">
                {Object.entries(ruleObject).map(([section, rules], index) => {
                  return (
                    <div key={index} className="space-y-2">
                      <h2 className="text-base font-semibold">{section}</h2>
                      {(rules as any).map((rule: string, index: number) => (
                        <p key={index} className="block text-sm">
                          {rule as string}
                        </p>
                      ))}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
