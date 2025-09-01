import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AfterDraggableImagesProducts from "./AfterDraggableImagesProducts";
import Form from "./Form";

export default function DesignFlowController() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [originalImage, setOriginalImage] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Update the useEffect to handle direct navigation cases
  useEffect(() => {
    if (location.state?.scrollToForm) {
      setSelectedRoom(location.state.selectedRoom);
      setOriginalImage(location.state.originalImage);
      setShowForm(true);
      // Clear the state to prevent infinite loops
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  // Ensure handleInputRedirect properly updates all states
  const handleInputRedirect = (roomType, originalImg) => {
    setSelectedRoom(roomType);
    setOriginalImage(originalImg);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (location.state?.scrollToForm) {
      setSelectedRoom(location.state.selectedRoom);
      setOriginalImage(location.state.originalImage);
      setShowForm(true);
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  

  const handleBackToGallery = () => {
    setShowForm(false);
    setSelectedRoom(null);
    setOriginalImage(null);
  };

  return (
    <div>
      {showForm ? (
        <div>
          <button
            onClick={handleBackToGallery}
            className="fixed top-4 left-4 z-50 bg-white text-[#007B82] px-4 py-2 rounded-md shadow-lg hover:bg-gray-100 transition-colors"
          >
            ← Back to Gallery
          </button>
          <AfterForm
            selectedRoom={selectedRoom}
            originalImage={originalImage}
          />
        </div>
      ) : (
        <AfterDraggableImagesProducts onInputClick={handleInputRedirect} />
      )}
    </div>
  );
}
