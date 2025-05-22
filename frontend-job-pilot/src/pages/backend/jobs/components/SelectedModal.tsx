import { DialogDescription } from "@radix-ui/react-dialog";
import JobsModal from "./Modal";
import Icon from "@/components/Icon";
import useFetch from "@/hooks/api/useFetch";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

type SelectedModalProps = {
  title: string;
  headerClass: string;
  selectId: string;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedId: React.Dispatch<React.SetStateAction<string>>;
  onClose: () => void;
};

export default function SelectedModal({
  selectId,
  isModalOpen,
  setIsModalOpen,
  setSelectedId,
}: SelectedModalProps) {
  const { data: editJobData } = useFetch(`/api/v1/jobs/${selectId}`);

  if (!selectId) return <Skeleton />;

  return (
    <JobsModal
      title="Job Details"
      headerClass="font-semibold text-lg"
      selectid={selectId}
      isOpen={isModalOpen}
      onClose={() => {
        setIsModalOpen(false);
        setSelectedId("");
      }}
    >
      <DialogDescription  className="max-h-[80vh] overflow-y-auto px-4 sm:px-6">
        <div className="description mb-1">
          <h5 className="font-medium">
            Company Name:{" "}
            <span className="font-bold">
              {editJobData?.data?.employer_information?.company_name}
            </span>
          </h5>
          <strong>Job Description:</strong>
          <p className="my-1 font-light">
            {editJobData?.data?.job_description}
          </p>
        </div>

        <div className="desirable my-1">
          <strong>Desirable:</strong>
          <p className="my-1 font-light">{editJobData?.data?.desirable}</p>
        </div>
        <div className="skills">
          <strong>Skills:</strong>
          <div className="skills flex items-center gap-x-2.5">
            <Icon iconName="skills" className="text-green-700" />
            <p className={` font-medium`}>
              {Array.isArray(editJobData?.data?.job_tags)
                ? editJobData?.data?.job_tags.join(", ")
                : editJobData?.data?.job_tags}
            </p>
          </div>
        </div>
        <div className="experienceLevel my-2.5">
          <strong>Experience Level:</strong>
          <div className="skills flex items-center gap-x-2.5">
            <Icon iconName="skills" className="text-green-700" />{" "}
            <p className={` font-medium`}>{editJobData?.data?.job_level}</p>
          </div>
        </div>
        <div className="companyLocation my-2.5">
          <strong>Company Location:</strong>
          <div className="location flex items-center gap-x-2.5">
            <Icon iconName="location" className="text-red-700" />{" "}
            <p className={` font-medium`}>{editJobData?.data?.job_location}</p>
          </div>
          <div className="flex items-center gap-x-2.5 my-2.5">
            <Icon iconName="phone" className="text-blue-700" />{" "}
            <p className=" font-medium">
              {" "}
              Contact No:{" "}
              {editJobData?.data?.employer_information?.company_phone_number}
            </p>
          </div>
        </div>
      </DialogDescription>
    </JobsModal>
  );
}
