"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Props = {
  deploymentId: string;
  initialStatus: string;
  initialErrorMessage: string | null;
};

function getStatusClass(status: string) {
  switch (status) {
    case "queued":
      return "border-yellow-200 bg-yellow-50 text-yellow-800";

    case "building":
      return "border-blue-200 bg-blue-50 text-blue-800";

    case "ready":
      return "border-green-200 bg-green-50 text-green-800";

    case "failed":
      return "border-red-200 bg-red-50 text-red-800";

    default:
      return "border-gray-200 bg-gray-50 text-gray-800";
  }
}

export default function DeploymentStatus({
  deploymentId,
  initialStatus,
  initialErrorMessage,
}: Props) {
  const [status, setStatus] = useState(initialStatus);
  const [errorMessage, setErrorMessage] = useState(
    initialErrorMessage,
  );

  useEffect(() => {
    const supabase = createClient();

    const channel = supabase
      .channel(`deployment-status-${deploymentId}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "deployments",
          filter: `id=eq.${deploymentId}`,
        },
        (payload) => {
          const deployment = payload.new as {
            status: string;
            error_message: string | null;
          };

          setStatus(deployment.status);
          setErrorMessage(deployment.error_message);
        },
      )
      .subscribe();

    return () => {
      void supabase.removeChannel(channel);
    };
  }, [deploymentId]);

  return (
    <div className="mt-2">
      <span
        className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium capitalize ${getStatusClass(status)}`}
      >
        {status}
      </span>

      {status === "failed" && errorMessage && (
        <div className="mt-4 rounded-md border border-red-200 bg-red-50 p-3">
          <p className="text-xs font-medium text-red-800">
            Build failed
          </p>

          <p className="mt-1 text-xs text-red-700">
            {errorMessage}
          </p>
        </div>
      )}
    </div>
  );
}