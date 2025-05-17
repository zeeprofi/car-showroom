
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload, ImagePlus } from 'lucide-react';

interface CarPhotoUploadProps {
  files: File[];
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeFile: (index: number) => void;
}

const CarPhotoUpload: React.FC<CarPhotoUploadProps> = ({ files, handleFileChange, removeFile }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-2 text-primary font-bold">3</span>
        Car Photos
      </h3>
      
      <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
        <ImagePlus className="h-10 w-10 text-gray-400 mb-2 mx-auto" />
        <p className="text-gray-600 mb-2">Drag and drop your car photos here, or click to browse</p>
        <p className="text-xs text-gray-500 mb-4">Upload up to 10 high-quality photos (max 5MB each)</p>
        
        <Input
          type="file"
          id="car-photos"
          className="hidden"
          onChange={handleFileChange}
          multiple
          accept="image/*"
        />
        <label htmlFor="car-photos">
          <Button type="button" variant="outline" className="mx-auto">
            <Upload className="h-4 w-4 mr-2" />
            Select Files
          </Button>
        </label>
      </div>
      
      {files.length > 0 && (
        <div className="mt-6">
          <h4 className="text-sm font-semibold mb-2">Uploaded Files:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
            {files.map((file, index) => (
              <div key={index} className="relative group">
                <div className="h-24 rounded-md bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Preview ${index}`}
                    className="object-cover w-full h-full"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                >
                  ✕
                </button>
                <p className="text-xs text-gray-500 truncate mt-1">{file.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CarPhotoUpload;
