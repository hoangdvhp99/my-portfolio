import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Utils() {
  const [householdListFile, setHouseholdListFile] = useState<File | null>(null);
  const [invitationTemplateFile, setInvitationTemplateFile] = useState<File | null>(null);

  const handleHouseHoldFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setHouseholdListFile(e.target.files[0]);
    }
  };

  const handleInvitationFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setInvitationTemplateFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (householdListFile && invitationTemplateFile) {
      console.log("Uploading file...");

      const formData = new FormData();
      formData.append("householdListFile", householdListFile);
      formData.append("invitationTemplateFile", invitationTemplateFile);

      try {
        // You can write the URL of your server or any other endpoint used for file upload
        const result = await fetch("http://localhost:8080/utils/gen-invitations-from-household-list-file", {
          method: "POST",
          body: formData,
        });
        if (result) {
          const blob = await result.blob();
          const downloadUrl = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = downloadUrl;

          // This is important: you'll need to know the name of the file you're downloading.
          // If the backend sets the 'Content-Disposition' header with a filename,
          // you could extract it here. Otherwise, you might default to a predetermined name.
          link.setAttribute('download', 'DS_GIAYMOI.zip');
          document.body.appendChild(link);
          link.click();
          link.remove();
        }

      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <>
      <div>
        <label htmlFor="householdListFile" >
          Chọn file danh sách hộ dân:
        </label>
        <br />
        <input id="householdListFile" type="file" onChange={handleHouseHoldFileChange} />
      </div>
      <br />
      <div>
        <label htmlFor="invitationTemplateFile" >
          Chọn file mẫu giấy mời:
        </label>
        <br />
        <input id="invitationTemplateFile" type="file" onChange={handleInvitationFileChange} />
      </div>
      {/* 
      {householdListFile && (
        <section>
          File details:
          <ul>
            <li>Name: {householdListFile.name}</li>
            <li>Type: {householdListFile.type}</li>
            <li>Size: {householdListFile.size} bytes</li>
          </ul>
        </section>
      )} */}

      {householdListFile && invitationTemplateFile && <Button className="mt-3" variant="outline-success" onClick={handleUpload}>Upload a file</Button>}

    </>
  )
}
