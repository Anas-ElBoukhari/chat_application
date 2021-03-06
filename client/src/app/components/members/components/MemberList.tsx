import React from "react";
import { Member as MemberType } from "../../../../types/Member";
import Member from "./Member";

interface MemberListProps {
  members: MemberType[];
}

const MemberList: React.FC<MemberListProps> = ({ members }) => {
  if (!members) return <ul></ul>;

  return (
    <ul className="list list--members">
      {members.map((member: MemberType) => (
        <Member key={member.id} member={member} />
      ))}
    </ul>
  );
};

export default MemberList;
